import { User } from '4_entities/User'

/* eslint-disable no-unused-vars */
export enum ArticleBlockType {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE',
}

export interface ArticleBlockBase {
    id: string
    type: ArticleBlockType
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE
    code: string
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE
    src: string
    title?: string
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT
    title?: string
    paragraphs: string[]
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS',
    POLITICS = 'POLITICS',
}

export type ArticleView = 'tile' | 'list'

export type ArticleSortField = 'views' | 'title' | 'createdAt'

export interface ArticleSchema {
    id: string
    title: string,
    subtitle: string,
    img: string,
    views: number,
    search: string,
    createdAt: string,
    user: User,
    type: ArticleType[],
    blocks: ArticleBlock[]
}
