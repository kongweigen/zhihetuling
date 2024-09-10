import {
	queryUser
} from '@/api';
import {
	ref,
	onMounted
} from 'vue';

import {
	onLoad,
} from '@dcloudio/uni-app';
import {
	menuMock,
	createItemMock,
	historyMock,
	routerUrlMap
} from '@/utils/index.js'

export const useHome = () => {

	const menuList = ref(menuMock)
	const createItem = ref(createItemMock)
	const historyList = ref(historyMock)
	const toPage = (item, routerType) => {
		const urlName = item.value || item;
		switch (urlName) {
			case 'clear':
				toRoute(routerUrlMap['clear'], 'clear')
				break;
			case '图片创作':
				toRoute(routerUrlMap['picDesign'])
				break;
			case '视频创作':
				toRoute(routerUrlMap['videoDesign'])
				break;
			case 'fireChat':
				toRoute(routerUrlMap['fireChat'])
				break;
			default:
				toRoute(routerUrlMap['picDesign'])
				break;
		}

	}

	const toRoute = (url, type) => {
		if (type === 'tab') {
			uni.switchTab({
				url: url
			})
		} else {
			uni.navigateTo({
				url: `/pages/design/index`
			});
		}

	}
	const toPcedit = (params) => {
		let query = '?';
		for (let key in params) {
			if (params.hasOwnProperty(key)) {
				query += `${key}=${params[key]}&`;
			}
		}
		// 移除最后一个'&'
		query = query.substr(0, query.length - 1);
		uni.navigateTo({
			url: `/pages/pcedit/index${query}`,
		});
	}
	onMounted(() => {
		queryUser()
	})
	return {
		toPcedit,
		createItem,
		historyList,
		menuList,
		toPage
	}
}