<template>
  <section id="home" class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-white to-accent-100">
    <div class="max-w-5xl mx-auto text-center animate-fadeIn">
      <div class="mb-8">
        <div class="w-40 h-40 mx-auto rounded-full flex items-center justify-center shadow-2xl border-4 border-white overflow-hidden">
          <img 
            src="@/assets/headshot.jpg" 
            alt="Ferdinand Pendon" 
            class="w-full h-full object-cover"
          >
        </div>
      </div>
      
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 mb-4">
        Ferdinand Pendon
      </h1>
      
      <p class="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Full Stack Developer | Backend Specialist
      </p>
      
      <p class="text-lg text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
        Experienced software developer with expertise in PHP, Laravel, JavaScript, relational databases, and modern web technologies. 
        Passionate about building scalable, impactful applications written with high-quality code.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <a href="#contact" class="btn-primary">
          Get In Touch
        </a>
        <a href="#about" class="btn-secondary">
          Learn More
        </a>
      </div>
      
      <div class="flex gap-4 justify-center text-gray-400">
        <a href="https://www.linkedin.com/in/ferdie-pendon/" target="_blank" class="hover:text-accent-500 transition-colors">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.815 0-9.728h3.554v1.375c.428-.659 1.191-1.594 2.897-1.594 2.117 0 3.704 1.385 3.704 4.362v5.585zM5.337 9.432c-1.144 0-1.915-.761-1.915-1.713 0-.951.77-1.713 1.997-1.713 1.226 0 1.913.762 1.938 1.713 0 .952-.712 1.713-1.938 1.713zm1.946 11.02H3.391V9.956h3.892v10.496zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
          </svg>
        </a>
        <a href="https://github.com/fcpendon" target="_blank" class="hover:text-accent-500 transition-colors">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a href="mailto:fcpendon@gmail.com" class="hover:text-accent-500 transition-colors">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
