export type bannerHeaderProps = {
    text: string,
    image: string,
    textColor: string
}

export type tabProps = {
    tabName: string
}

export type timelineEntryProps = {
    header: string,
    blockAlignment: string,
    date: string,
    contents: string
}

export type articleData = {
    header: string,
    date: string,
    contents: string
}

export type timelineProps = {
    articles: articleData[]
}