export type BulletsSchema = Array <{
    image: string
    titleBullet: string
    link?: LinkProps
}>

export interface LinkProps {
    url: string
    attributeNoFollow?: boolean
    attirbuteTitle?: string
    openNewTab?: boolean
    newTab?: boolean
}