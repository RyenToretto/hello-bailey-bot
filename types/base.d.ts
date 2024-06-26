declare interface ResponseData<T> {
  code: string | number
  message: string
  result: T
}
