import { ref } from 'vue'
import { tnNavPage } from '@tuniao/tnui-vue3-uniapp/utils'
import type { Banner } from '@/types/api/banner'
import type { IndexPageOnLoadFunc } from '@/pages/index/types'
import type { Article } from '@/types/api/article'
import { useSubPageProvide } from '@/pages/index/composables'
import { generateRandomNumber } from '@/utils/local-mock'

export const useSubPage = () => {
 
  // 资讯数据
  const newsData = ref<Article[]>([])


  const onLoad: IndexPageOnLoadFunc = () => {
   

    newsData.value = Array.from({ length: generateRandomNumber(10, 30) }).map(
      () => ({
        id: generateRandomNumber(1000, 9999).toString(),
        title: '图鸟官网模板全新上线',
        mainImage: 'https://resource.tuniaokj.com/images/xiongjie/x14.jpg',
        desc: '图鸟官网模板全新上线，欢迎大家前来体验。',
        content: '图鸟官网模板全新上线，欢迎大家前来体验。',
        tags: ['图鸟'],
        hotCount: generateRandomNumber(1, 100),
        replyCount: generateRandomNumber(1, 100),
        likeCount: generateRandomNumber(1, 100),
        viewCount: generateRandomNumber(1, 100),
        shareCount: generateRandomNumber(1, 100),
        viewUsersAvatar: [],
        recommend: generateRandomNumber(1, 10) % 2 === 0,
      })
    )
  }

  useSubPageProvide(3, {
    onLoad,
  })

  return {
    newsData
  }
}
