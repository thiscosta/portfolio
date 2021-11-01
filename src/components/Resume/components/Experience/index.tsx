import React from "react"
import HistoricalData from "../commons/HistoricalData"

const Experience: React.FC = () => {
  return (
    <HistoricalData
      title="Experiência"
      cards={[
        {
          title: "Desenvolvedor Full Stack",
          content:
            "Bacharelado em sistemas de informação com duração de 4 anos",
          date: "19/10/2020 - Atual",
          description: "Luizalabs",
          tags: [
            "NodeJS",
            "Java",
            "React",
            "ELK",
            "RabbitMQ",
            "Cloud (AWS/GCP)",
            "Oracle",
            "MySQL",
            "GraphQL",
            "Git",
            "Agile"
          ],
        },
        {
          title: "Engenheiro de dados",
          content: "Curso técnico em informática com ênfase em programação",
          date: "02/12/2019 - 16/10/2020",
          description: "Dextra",
          tags: [
            "Big Data",
            "Hadoop",
            "Spark",
            "Scala",
            "Python",
            "ELK",
            "Kafka",
            "HBase",
            "Cloud (AWS/GCP)",
            "Kubernetes",
            "Git",
            "Agile"
          ],
        },
        {
          title: "Desenvolvedor Full Stack",
          content:
            "Desenvolvimento de soluções backend, web e mobile. Arquitetura de sistemas, levantamento de requisitos, atuações em diversos projetos, inclusive em projetos internacionais",
          date: "04/09/2018 - 29/11/2019",
          description: "Sottelli",
          tags: [
            "Salesforce",
            "Java",
            "Javascript",
            "NodeJS",
            "React Native",
            "React",
            "Android",
            "Cloud (AWS/GCP)",
            "Git",
            "Agile"
          ],
        },
      ]}
    />
  )
}

export default Experience
