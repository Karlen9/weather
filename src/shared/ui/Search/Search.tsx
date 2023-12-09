import { useTranslation } from 'react-i18next'
import cls from './Search.module.scss'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { citySlice } from 'shared/store/reducers/CitySlice'
import { useNavigate } from "react-router-dom";

interface Props {}

export const Search: React.FC<Props> = (props) => {
  const [city, setCity] = useState('')
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = () => {
    if(!city) {
        return
    }
    dispatch(citySlice.actions.setLocationCity(city))
    navigate('/')
  }

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
        onSubmit()
    }
  }

  return (
    <div className={cls.Serach}>
      <input
        className={cls.searchInput}
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder={t('Searh for city...')}
        onKeyDown={(e) => onKeyPress(e)}
      />
    </div>
  )
}
