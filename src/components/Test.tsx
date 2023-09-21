'use client'

import cls from '@/styles/Loader.module.scss'

export default function LoadingData({ small = false }: { small?: boolean }) {

  const sizeClass = small ? cls['loading_small'] : ''
  const titleClass = small ? 'text-sm' : 'text-2xl'
  const containerClass = small ? 'p-4' : 'p-6'
  return (
    <>
      <div className={`${containerClass} ${cls['loading-container']}`}>
        <div className={`${cls['loading']} ${cls['loader']} ${sizeClass}`}>
        </div>
        <h4 className={`${titleClass} font-semibold`}>{'loading'}</h4>
      </div>
    </>
  )
}
