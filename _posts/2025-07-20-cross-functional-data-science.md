---
layout: post
title: "my experience working as a data scientist at a biomaterials company"
date: 2025-07-20
categories: [data-science, biomaterials, startups]
---

my experience working as a data scientist at a biomaterials company

during my internship as a junior data scientist at kelpi, a biomaterials startup, i discovered that data science in the real world is vastly different from the clean datasets and well-defined problems of academia. working alongside chemistry phds who were developing bioplastics from seaweed, i found myself in a awkward intersection of computer science and materials science.

one of the most remarkable aspects of working at kelpi was witnessing the journey from raw seaweed to functional bioplastic materials. the chemistry team was conducting experiments involving complex metrics like wvtr (water vapor transmission rate) and cobb tests for measuring water absorption. as the sole computer scientist among a team of chemistry phds, i had to quickly learn not just what these measurements meant, but how to structure them in ways that would enable meaningful analysis.

translating chemistry concepts into structured data schemas proved to be one of my most challenging yet rewarding tasks. when chemists discussed "formulation stability" or "synthesis yield," they were describing nuanced experimental outcomes that needed to be captured with precision. every measurement, from tensile strength to water vapour transmission rate, had specific units, conditions, and contexts that were crucial for maintaining data integrity.

initially, my role focused on transforming raw spreadsheets into structured files ready for database storage. this process, while seemingly straightforward, opened my eyes to the importance of precision in data workflows. a single misplaced character or minor indexing mistake could disrupt the entire pipeline, leading me to invest heavily in robust validation systems.

the etl pipelines were incredibly challenging to get right. each experiment generated data in slightly different formats, with varying naming conventions and measurement scales. i spent considerable time learning about performance optimization, implementing sophisticated quarantining systems that could isolate problematic records without interrupting overall operations. these pipelines needed to handle everything from basic formulation data to complex synthesis processes, each with their own data quality requirements.

early on, i automated the extraction of excel sheets into csv files, significantly reducing manual work and introducing reliability into repetitive tasks. however, the real challenge lay in ensuring consistent data formatting across diverse experimental setups. the validation checks i implemented had to account for the specific constraints of chemistry data while remaining flexible enough to accommodate new experimental approaches.

my role expanded considerably during the continuation phase of my internship, where i took full ownership of kelpi's data architecture, engineering, and system design. this involved extensive hands-on experience with azure, postgresql databases, and substantial python programming to construct custom etl pipelines tailored specifically for kelpi's business needs.

one of my core achievements was creating an adaptable architecture that avoided locking kelpi into a single database provider. the monitoring and logging systems i implemented significantly improved both reliability and transparency of the data management process. when researchers questioned data discrepancies, i could provide clear, traceable explanations that built trust in the system.

the infrastructure i built has set kelpi up effectively to integrate machine learning into their workflows. centralizing data into a single, well-managed repository provides a strong foundation for predictive modeling and experimentation. looking forward, there's tremendous potential for embedding machine learning directly within their experimentation pipelines, moving beyond external analytical providers to develop in-house expertise.

working as the only computer scientist among chemistry phds taught me the critical importance of technical communication. i learned to start with business impact rather than technical details, using analogies from chemistry and product development to explain database schema changes or pipeline optimizations. interactive demonstrations proved far more effective than traditional presentations when showcasing new capabilities.

the startup environment at kelpi was refreshingly open to innovation. if a new approach could streamline processes or improve accuracy, my colleagues enthusiastically embraced it. this supportive environment encouraged me to clearly articulate technical ideas and increased my confidence when proposing architectural changes.

perhaps most importantly, i discovered that the best technical solutions work with existing workflows rather than against them. understanding how experiments were actually conducted, how data was traditionally recorded, and what information scientists needed for decision-making became just as important as writing efficient code.

one of my biggest realizations was how much innovation can be bottlenecked by real-world constraints. building sophisticated machine learning models means little if your data pipeline can't handle the messy reality of experimental data. i learned to anticipate potential errors and implement comprehensive exception handling, recognizing that robust data pipelines rely as much on careful contingency planning as on elegant main logic.

the performance optimization challenges were particularly interesting in the chemistry context. large datasets from multiple experimental runs needed to be processed efficiently while maintaining the precision required for scientific analysis. balancing speed with accuracy became a constant consideration in pipeline design.

beyond the technical growth, this experience gave me practical knowledge of managing complex technical responsibilities in a startup environment. my skills in software engineering, pipeline design, cloud infrastructure, and systems integration improved dramatically. more importantly, i developed a deep appreciation for meticulous documentation and clear communication, both crucial for sustaining complex technical systems.

the mentorship i received from the chemistry team enriched my understanding of the intersection between data science and materials science. conversations with colleagues from product development illustrated how data-driven insights directly support meaningful research into sustainable materials.

*the experience reinforced my belief that data science is most impactful when it serves domain expertise, rather than attempting to replace it.* 