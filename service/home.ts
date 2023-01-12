import sxRequest from './index'
import type { IResultData } from './index'
import type { IHomeState } from '~~/store/home'

export type HomeInfoType = "oppo" | "onePlus" | "intelligent"

export const getHomeInfo = (type: HomeInfoType) => {
  return sxRequest.get<IResultData<IHomeState>>('/home/info', {
    type: type || "oppo"
  })
}