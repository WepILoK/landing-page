import { createStore, createEffect } from 'effector';
import axios from "axios";

type StoreType = {
    key: string
    name: string
    logoSvg: string
}

export const getSkillsItem = createEffect(async () => {
  return await axios.get("/skillItems").then(({ data }) => data)
})

export const skillItems = createStore<Array<StoreType>>([])
  .on(getSkillsItem.doneData, (_, res) => res ? res : [])
