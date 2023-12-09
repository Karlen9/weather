import cls from './NotFound.module.scss'

const NotFound = () => {
  return (
    <div className={cls.NotFound}>
      <div className={cls.errorCode}>404</div>
      <div className={cls.errorText}>Not found</div>
    </div>
  )
}

export default NotFound
