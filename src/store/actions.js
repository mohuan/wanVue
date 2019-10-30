/**
 * 可以进行异步操作
 * 调用方法为dispatch
 */
export default {
  spinshow(context,flg){
    context.commit('spinshow',flg)
  }
}
