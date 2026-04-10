<template>
  <section id="experience" class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-accent-50">
    <div class="max-w-5xl mx-auto">
      <h2 class="section-heading text-center mb-16">Professional Experience</h2>
      
      <div class="space-y-8">
        <ExperienceCard 
          v-for="(job, index) in experiences"
          :key="job.company"
          :job="job"
          :delay="index * 0.15"
        />
      </div>
      
      <div class="mt-16 pt-16 border-t border-primary-200">
        <h3 class="text-2xl font-bold text-primary-900 mb-8">Education</h3>
        <div class="card">
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-100">
                <span class="text-xl">🎓</span>
              </div>
            </div>
            <div class="flex-grow">
              <h4 class="text-xl font-bold text-primary-900">Bachelor of Science in Computer Science</h4>
              <p class="text-accent-600 font-semibold">University of the Philippines Los Baños</p>
              <p class="text-gray-600 text-sm mt-1">Los Baños, Laguna</p>
            </div>
            <div>
              <span class="inline-block px-4 py-2 bg-accent-50 text-accent-600 rounded-full font-semibold text-sm whitespace-nowrap">
                2006 - 2013
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ExperienceCard from './ExperienceCard.vue'

const experiences = [
  {
    company: 'PIC Philippines',
    position: 'Software Developer',
    location: 'Mandaluyong City, Metro Manila',
    period: 'Jun 2023 - Apr 2026',
    highlights: [
      'Assigned to the US-based Product Development team that delivers enhancements, new features, and bug fixes for a proprietary web application (PICTraq)',
      'Contributed to the development of an in-house PHP MVC framework, including designing a Laravel-inspired routing system that improved development efficiency',
      'Supported system modernization by migrating vanilla PHP code to Laravel and refactoring legacy Python code to MVC structure',
      'Developed Python-based ETL scripts to process large-scale pig data pipelines',
      'Implemented i18n on Python-based report generation pipelines to support translation on multiple languages',
      'Created automated test scripts using PHPUnit, Pytest and Unittest, targeting high code coverage and improved code reliability',
      'Maintained Oracle views, functions, packages, and stored procedures for reporting and analytics'
    ]
  },
  {
    company: 'Cafe24 Philippines',
    position: 'Senior Developer',
    location: 'Mandaluyong City, Metro Manila',
    period: 'Dec 2021 - Jun 2023',
    highlights: [
      'Developed enhancements for a Korean e-commerce dashboard integrating marketing, advertising, and analytics platforms (Facebook, Google, Instagram, Criteo)',
      'Researched and conducted demos on modern technologies (e.g. CSR vs SSR vs SSG) to improve team development capabilities',
      'Managed bug tracking and issue resolution using Jira, improving turnaround time for fixes',
      'Produced technical documentation, system designs, and development plans using Confluence'
    ]
  },
  {
    company: 'Security Bank Corporation',
    position: 'Team Lead / Developer',
    location: 'Makati City, Metro Manila',
    period: 'Oct 2017 - Sep 2021',
    highlights: [
      'Led a small team of developers while serving as Scrum Master for multiple initiatives, such as Car4Cash and Scorecard',
      'Designed and developed an internal web application supporting business process automation, advanced operations, and batch processing',
      'Administered and maintained BPMS servers and databases, providing development and database support and troubleshooting',
      'Built REST and SOAP APIs that perform ETL services between external and internal systems',
      'Maintained PHP and Python scripts for data warehousing, extraction, and reporting',
      'Collaborated with HR in screening and evaluating technical candidates for developer roles',
      'Directly coordinated with business stakeholders to define project scope, deliverables, and timelines'
    ]
  },
  {
    company: 'Globe Telecom',
    position: 'Systems Analyst',
    location: 'Taguig City, Metro Manila',
    period: 'Aug 2016 - Sep 2017',
    highlights: [
      'Managed technical deliverables for multiple projects, such as online portal enhancements for DSL subscribers, and cloud-based audit document repository using Amazon S3',
      'Spearheaded a project for calendar-based bandwidth provisioning for corporate leased lines using SDN',
      'Produced technical documentation, requirements specifications, and test plans',
      'Oversaw UAT and SAT processes, including test execution monitoring and result analysis'
    ]
  },
  {
    company: 'KLab Cyscorpions',
    position: 'Software Engineer',
    location: 'Taguig City, Metro Manila',
    period: 'Aug 2013 - Apr 2016',
    highlights: [
      'Developed server-side features for a globally released mobile game',
      'Implemented an auto-play system supporting quest progression, random encounters, PvP battles, item usage, and loot mechanics',
      'Designed and maintained APIs using a proprietary PHP MVC framework',
      'Investigated and resolved issues reported by QA and frontend teams via Redmine',
      'Supported DevOps and live operations for international and Japanese game versions'
    ]
  }
]
</script>
