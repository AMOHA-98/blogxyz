---
layout: post
title: "My Experience Working as a Data Scientist at a Biomaterials Company"
date: 2025-07-20
categories: [data-science, biomaterials, startups]
---

# My Experience Working as a Data Scientist at a Biomaterials Company

During my internship as a Junior Data Scientist at Kelpi, a biomaterials startup, I discovered that data science in the real world is vastly different from the clean datasets and well-defined problems of academia. Working alongside chemistry PhDs who were developing bioplastics from seaweed, I found myself in a fascinating intersection of computer science and materials science.

## From Seaweed to Data Schema

One of the most remarkable aspects of working at Kelpi was witnessing the journey from raw seaweed to functional bioplastic materials. The chemistry team was conducting experiments involving complex metrics like WVTR (Water Vapor Transmission Rate) and Cobb tests for measuring water absorption. As the sole computer scientist among a team of chemistry PhDs, I had to quickly learn not just what these measurements meant, but how to structure them in ways that would enable meaningful analysis.

Translating chemistry concepts into structured data schemas proved to be one of my most challenging yet rewarding tasks. When chemists discussed "formulation stability" or "synthesis yield," they were describing nuanced experimental outcomes that needed to be captured with precision. Every measurement, from tensile strength to biodegradation rates, had specific units, conditions, and contexts that were crucial for maintaining data integrity.

## The ETL Pipeline Challenge

Initially, my role focused on transforming raw spreadsheets into structured files ready for database storage. This process, while seemingly straightforward, opened my eyes to the importance of precision in data workflows. A single misplaced character or minor indexing mistake could disrupt the entire pipeline, leading me to invest heavily in robust validation systems.

The ETL pipelines were incredibly challenging to get right. Each experiment generated data in slightly different formats, with varying naming conventions and measurement scales. I spent considerable time learning about performance optimization, implementing sophisticated quarantining systems that could isolate problematic records without interrupting overall operations. These pipelines needed to handle everything from basic formulation data to complex synthesis processes, each with their own data quality requirements.

Early on, I automated the extraction of Excel sheets into CSV files, significantly reducing manual work and introducing reliability into repetitive tasks. However, the real challenge lay in ensuring consistent data formatting across diverse experimental setups. The validation checks I implemented had to account for the specific constraints of chemistry data while remaining flexible enough to accommodate new experimental approaches.

## Technical Architecture and Azure Integration

My role expanded considerably during the continuation phase of my internship, where I took full ownership of Kelpi's data architecture, engineering, and system design. This involved extensive hands-on experience with Azure cloud services, PostgreSQL databases, and substantial Python programming to construct custom ETL pipelines tailored specifically for Kelpi's business needs.

One of my core achievements was creating an adaptable architecture that avoided locking Kelpi into a single database provider. The monitoring and logging systems I implemented significantly improved both reliability and transparency of the data management process. When researchers questioned data discrepancies, I could provide clear, traceable explanations that built trust in the system.

The infrastructure we built has set Kelpi up effectively to integrate machine learning into their workflows. Centralizing data into a single, well-managed repository provides a strong foundation for predictive modeling and experimentation. Looking forward, there's tremendous potential for embedding machine learning directly within their experimentation pipelines, moving beyond external analytical providers to develop in-house expertise.

## Bridging Two Worlds

Working as the only computer scientist among chemistry PhDs taught me the critical importance of technical communication. I learned to start with business impact rather than technical details, using analogies from chemistry and product development to explain database schema changes or pipeline optimizations. Interactive demonstrations proved far more effective than traditional presentations when showcasing new capabilities.

The startup environment at Kelpi was refreshingly open to innovation. If a new approach could streamline processes or improve accuracy, my colleagues enthusiastically embraced it. This supportive environment encouraged me to clearly articulate technical ideas and increased my confidence when proposing architectural changes.

Perhaps most importantly, I discovered that the best technical solutions work with existing workflows rather than against them. Understanding how experiments were actually conducted, how data was traditionally recorded, and what information scientists needed for decision-making became just as important as writing efficient code.

## Performance Optimization and Real-World Constraints

One of my biggest realizations was how much innovation can be bottlenecked by real-world constraints. Building sophisticated machine learning models means little if your data pipeline can't handle the messy reality of experimental data. I learned to anticipate potential errors and implement comprehensive exception handling, recognizing that robust data pipelines rely as much on careful contingency planning as on elegant main logic.

The performance optimization challenges were particularly interesting in the chemistry context. Large datasets from multiple experimental runs needed to be processed efficiently while maintaining the precision required for scientific analysis. Balancing speed with accuracy became a constant consideration in pipeline design.

## Lasting Impact

Beyond the technical growth, this experience gave me practical knowledge of managing complex technical responsibilities in a startup environment. My skills in software engineering, pipeline design, cloud infrastructure, and systems integration improved dramatically. More importantly, I developed a deep appreciation for meticulous documentation and clear communication, both crucial for sustaining complex technical systems.

The mentorship I received from the chemistry team enriched my understanding of the intersection between data science and materials science. Conversations with colleagues from product development illustrated how data-driven insights directly support meaningful research into sustainable materials.

Working at Kelpi was ultimately about more than building data infrastructure. It was about enabling scientific discovery in the fascinating field of biomaterials, where seaweed becomes the foundation for sustainable packaging solutions. 

*The experience reinforced my belief that data science is most impactful when it serves domain expertise, rather than attempting to replace it.* 