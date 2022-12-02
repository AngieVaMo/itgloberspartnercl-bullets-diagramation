import React from "react"
//import BulletGroup from ".."
import { BulletsSchema } from "../BulletTypes"
//import { Link } from "../BulletTypes"
import Bullet from "../Bullet"


export const getBulletsAsTSXList = (
    bullets: BulletsSchema
) => (
    bullets.map((bullet:any, index) => {
        console.log("Mi bullet es:", bullet)
        return <Bullet
         key={index}
         src={bullet.image}
         titleBullet={bullet.titleBullet}
         link={ 
            bullet.link
            ?
            bullet.link
            :
            {
             url: "",
             attributeNoFollow: false,
             attirbuteTitle: "",
             openNewTab: false,
             newTab: false
            }
          }
        />

    })
)