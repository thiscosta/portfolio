import React from "react"
import HistoricalData from "../commons/HistoricalData"

const Education: React.FC = () => {
  return (
    <HistoricalData
      title="Formação"
      cards={[
        {
          content:
            "Bacharelado em sistemas de informação com duração de 4 anos",
          title: "Sistemas de Informação",
          date: "2018-2021",
          description: "UNASP Hortolândia",
        },
        {
          title: "Técnico em informática",
          content: "Curso técnico em informática com ênfase em programação",
          date: "2016-2017",
          description: "ETEC Hortolândia",
        },
        {
          title: "Ensino médio",
          content: "Ensino médio",
          date: "2015-2017",
          description: "ETEC Hortolândia",
        },
      ]}
    />
  )
}

export default Education
