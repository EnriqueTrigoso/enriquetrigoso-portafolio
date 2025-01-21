import { useTranslations } from 'next-intl';
import React from 'react'

const Project = () => {

  const t = useTranslations("projects")

  return (
    <div>
      <h1>
        {t("title")}
      </h1>

      
    </div>
  )
}

export default Project;