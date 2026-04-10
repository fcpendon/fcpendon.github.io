<template>
  <section id="skills" class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-100 to-accent-100">
    <div class="max-w-5xl mx-auto">
      <h2 class="section-heading text-center mb-16">Skills & Expertise</h2>
      
      <div class="grid md:grid-cols-2 gap-8">
        <SkillCategory 
          v-for="(category, index) in skillCategories" 
          :key="category.name"
          :category="category"
          :delay="index * 0.1"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SkillCategory from './SkillCategory.vue'

const skillCategories = [
  {
    name: 'Backend Technologies',
    icon: '⚙️',
    skills: ['PHP', 'Laravel', 'Python', 'REST API', 'SOAP API', 'Shell Scripting']
  },
  {
    name: 'Frontend Technologies',
    icon: '🎨',
    skills: ['JavaScript', 'Vue', 'React', 'jQuery', 'Tailwind', 'Bootstrap', 'HTML5', 'CSS3']
  },
  {
    name: 'Database & Caching Systems',
    icon: '🗄️',
    skills: ['MySQL', 'Oracle', 'MongoDB', 'PL/SQL', 'PostgreSQL', 'Redis', 'Memcached']
  },
  {
    name: 'Testing & QA',
    icon: '✅',
    skills: ['PHPUnit', 'Pytest', 'Unittest', 'Mocking', 'Selenium IDE', 'Coverage.py']
  },
  {
    name: 'Software Development',
    icon: '💻',
    skills: ['MVC', 'OOP', 'SOLID', 'SDLC', 'Scrum', 'Waterfall']
  },
  {
    name: 'Tools & Platforms',
    icon: '🛠️',
    skills: ['VS Code', 'MySQL Workbench', 'Postman', 'PuTTY', 'Git', 'Azure', 'Jira', 'Confluence']
  },
  {
    name: 'AI & Modern Tools',
    icon: '🤖',
    skills: ['Github Copilot', 'ChatGPT', 'Claude', 'Gemini', 'N8N']
  },
  {
    name: 'Operating Systems',
    icon: '🖥️',
    skills: ['Linux', 'Windows', 'macOS']
  }
]
</script>
