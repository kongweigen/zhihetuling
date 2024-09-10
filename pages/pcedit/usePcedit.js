import {
	generateImagePcedit,
	getTaskById
} from '@/api/index.js'
import {
	ref,
	onMounted
} from 'vue';
import {
	onLoad,
} from '@dcloudio/uni-app';


export const usePcedit = () => {
	const customStyle = ref({
		width: "700rpx",
		height: "100rpx",
		color: "#ffffff",
		fontSize: "42rpx",
		borderRadius: "50rpx",
		background: "#007CFF"
	})


	const loading = ref(false)
	const generate = async () => {
		const req = getPceditReq(sourceImage.value.url, sourceImage.value.url)
		console.log("generateImagePcedit ", req)
		uni.showLoading({
			mask: true,
			title: 'AI 处理中'
		});
		const res = await generateImagePcedit(req).catch(() => clearTask())
		if (!res) return
		// uni.setStorageSync('storage_key', 'hello');
		getTaskInterval(res.id)
	}

	const queryTasking = ref(false)
	const intervalCode = ref("")
	const imageUrl = ref("")
	// const imageUrl = ref("https://oss.ffire.cc/files/R2evGvkxENKGksFks6akGK.jpg")
	const getTaskInterval = async (id) => {
		intervalCode.value = setInterval(async () => {
			if (queryTasking.value) return
			queryTasking.value = true
			const res = await getTaskById(id).catch(() => {
				clearTask()
			})
			queryTasking.value = false
			let list = []
			if (res.picArr) {
				imageUrl.value = res.picArr[0].src
				clearTask()
			}
		}, 3000)
	}
	const clearTask = () => {
		uni.hideLoading();
		queryTasking.value = false
		loading.value = false
		clearInterval(intervalCode.value)
	}

	const sourceImage = ref({})
	const uploadImage = () => {
		uni.chooseImage({
			success: (chooseImageRes) => {
				const tempFile = chooseImageRes.tempFiles[0];
				const tempFilePath = chooseImageRes.tempFilePaths[0];
				let token = uni.getStorageSync("token")

				uni.showLoading({
					mask: true,
					title: '正在上传'
				});
				uni.uploadFile({
					url: 'https://agi.chatfire.cn/box/chat/file', //仅为示例，非真实的接口地址
					filePath: tempFilePath,
					name: 'file',
					header: {
						Authorization: `Bearer ${token}`
					},
					formData: {
						'file': tempFile,
						"purpose": "oss"
					},
					success: (uploadFileRes) => {
						uni.hideLoading();
						sourceImage.value = JSON.parse(uploadFileRes.data).data
					},
					fail: () => {
						uni.hideLoading();
					}
				});
			}
		});
	}



	const designType = ref('')
	const title = ref('')
	const subTitle = ref('')
	onLoad((option) => {
		console.log('onLoad option ', option)
		const {
			value,
			label,
			subLabel
		} = option
		designType.value = value
		title.value = label
		subTitle.value = subLabel

	})
	return {
		designType,
		title,
		subTitle,
		customStyle,
		sourceImage,
		imageUrl,
		uploadImage,
		generate,
	}
}