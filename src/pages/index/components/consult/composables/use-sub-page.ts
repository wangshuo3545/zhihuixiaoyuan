import { ref } from 'vue'
import { tnNavPage } from '@tuniao/tnui-vue3-uniapp/utils'
import type { Banner } from '@/types/api/banner'
import type { Article } from '@/types/api/article'
import { generateRandomNumber } from '@/utils/local-mock'
 
export const useSubPage = () => {

  // 资讯数据
  const newsData = ref<Article[]>([
	  {
	    id: generateRandomNumber(1000, 9999).toString(),
	    title: '舞动青春之风,展魅力校园风采',
	    mainImage: 'https://img1.baidu.com/it/u=3615001636,4104980777&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375',
	    desc: '舞动青春之风，展魅力校园风采”江川区第一中学团委组织开展校园大课间活动',
	    tags: ['云晨','图鸟'],
	    hotCount: generateRandomNumber(1, 100),
	    replyCount: generateRandomNumber(1, 100),
	    likeCount: generateRandomNumber(1, 100),
	    viewCount: generateRandomNumber(1, 100),
	    shareCount: generateRandomNumber(1, 100),
	    viewUsersAvatar: [],
	    recommend: generateRandomNumber(1, 10) % 2 === 0,
	  },
	  {
	    id: generateRandomNumber(1000, 9999).toString(),
	   title: '舞动青春之风,展魅力校园风采',
	   mainImage: 'https://img1.baidu.com/it/u=3615001636,4104980777&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375',
	   desc: '舞动青春之风，展魅力校园风采”江川区第一中学团委组织开展校园大课间活动',
	   tags: ['云晨','图鸟'],
	    hotCount: generateRandomNumber(1, 100),
	    replyCount: generateRandomNumber(1, 100),
	    likeCount: generateRandomNumber(1, 100),
	    viewCount: generateRandomNumber(1, 100),
	    shareCount: generateRandomNumber(1, 100),
	    viewUsersAvatar: [],
	    recommend: generateRandomNumber(1, 10) % 2 === 0,
	  },
	  {
	    id: generateRandomNumber(1000, 9999).toString(),
	   title: '舞动青春之风,展魅力校园风采',
	   mainImage: 'https://img1.baidu.com/it/u=3615001636,4104980777&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375',
	   desc: '舞动青春之风，展魅力校园风采”江川区第一中学团委组织开展校园大课间活动',
	   tags: ['云晨','图鸟'],
	    hotCount: generateRandomNumber(1, 100),
	    replyCount: generateRandomNumber(1, 100),
	    likeCount: generateRandomNumber(1, 100),
	    viewCount: generateRandomNumber(1, 100),
	    shareCount: generateRandomNumber(1, 100),
	    viewUsersAvatar: [],
	    recommend: generateRandomNumber(1, 10) % 2 === 0,
	  }
  ])

  // 跳转到资讯详情页
  const navArticleDetail = (id: string) => {
    tnNavPage(`/detail-page/article-detail/index?id=${id}&type=news`)
  }

 
  

  return {
    newsData,
    navArticleDetail,
  }
}
