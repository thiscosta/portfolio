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
            "Desenvolvimento full stack na criação de uma plataforma de low code, para a conversão de arquivos de design do figma para código react utilizando a biblioteca de componentes MUI. Arquitetura do sistema, gerenciamento das atividades para o time e gerenciamento do ambiente cloud",
          date: "13/06/2022 - Atual",
          description: "Quest.ai",
          tags: [
            "NodeJS",
            "React",
            "Cloud (AWS/GCP)",
            "MySQL",
            "Git",
            "Figma",
          ],
        },
        {
          title: "Desenvolvedor Full Stack",
          content:
            "Desenvolvimento full stack, atuando na criação de uma plataforma de leitura de audiobooks. Arquitetura do sistema, manutenção de microsserviços e gerenciamento dos deploys e do cluster kubernetes. ",
          date: "17/01/2022 - 10/06/2022",
          description: "Fullstack Labs",
          tags: [
            "NodeJS",
            "React",
            "Cloud (AWS/GCP)",
            "MySQL",
            "GraphQL",
            "Git",
            "Testes automatizados",
            "Playwright"
          ],
        },
        {
          title: "Desenvolvedor Full Stack",
          content:
            "Desenvolvimento full stack, design e arquitetura de soluções em ambiente cloud, gerenciamento de cluster kubernetes, monitoramento de aplicações em ambiente produtivo utilizando ELK, Grafana e Webhooks, criação de pipelines de CI/CD e ingestões de dados para o BigQuery (GCP) para o sistema de logística do Magazine Luiza",
          date: "19/10/2020 - 07/01/2022",
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
          ],
        },
        {
          title: "Engenheiro de dados",
          content: "Design, arquitetura e desenvolvimento de aplicações em ambiente de BigData para o cálculo de score do Serasa, criação de pipelines de CI/CD, gerenciamento do controle de execução de jobs em ambiente Hadoop",
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
          ],
        },
      ]}
    />
  )
}

export default Experience
