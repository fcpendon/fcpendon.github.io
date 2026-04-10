<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-primary-100 z-50 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="text-2xl font-bold text-primary-900">FP</div>
          <div class="hidden md:flex space-x-8">
            <a href="#home" class="text-gray-600 hover:text-accent-500 font-medium transition-colors">Home</a>
            <a href="#about" class="text-gray-600 hover:text-accent-500 font-medium transition-colors">About</a>
            <a href="#skills" class="text-gray-600 hover:text-accent-500 font-medium transition-colors">Skills</a>
            <a href="#experience" class="text-gray-600 hover:text-accent-500 font-medium transition-colors">Experience</a>
            <a href="#contact" class="text-gray-600 hover:text-accent-500 font-medium transition-colors">Contact</a>
          </div>
          <button @click="toggleMobileMenu" class="md:hidden text-primary-900">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        <!-- Mobile menu -->
        <div v-if="mobileMenuOpen" class="md:hidden pb-4 space-y-2">
          <a href="#home" class="block text-gray-600 hover:text-accent-500 font-medium py-2">Home</a>
          <a href="#about" class="block text-gray-600 hover:text-accent-500 font-medium py-2">About</a>
          <a href="#skills" class="block text-gray-600 hover:text-accent-500 font-medium py-2">Skills</a>
          <a href="#experience" class="block text-gray-600 hover:text-accent-500 font-medium py-2">Experience</a>
          <a href="#contact" class="block text-gray-600 hover:text-accent-500 font-medium py-2">Contact</a>
        </div>
      </div>
    </nav>

    <!-- Main content -->
    <main class="pt-16">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>
