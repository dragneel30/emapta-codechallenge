interface CURRENT_ARTICLE_PARAMS {
    q: string
}

interface Article {
    urlToImage: string,
    title: string,
    author: string, 
    description: string,
    publishedAt: string,
    content: string,
}

interface ArticleCardData {
    data: Article
    onPress?: () => void
    onPressTitle?: () => void
    asList: Boolean
}

interface Props {
    navigation: any,
    route: any
}