interface CURRENT_ARTICLE_PARAMS {
    q: string
}

interface Article {
    urlToImage: string,
    title: string,
    author: string, 
    description: string,
    publishedAt: string,
}

interface ArticleCardData {
    data: Article
    onPress?: () => void
}

interface Props {
    navigation: any,
    route: any
  }