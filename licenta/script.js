 // Matrix rain effect
        function createMatrixRain() {
            const matrix = document.getElementById('matrix');
            const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネ{}[]()<>|\\/*-+ABCDEFabcdef';
            
            for (let i = 0; i < 200; i++) {
                const rain = document.createElement('div');
                rain.className = 'rain';
                rain.style.left = Math.random() * 100 + '%';
                rain.style.animationDelay = Math.random() * 2 + 's';
                rain.style.animationDuration = (Math.random() * 2 + 2) + 's';
                rain.textContent = chars[Math.floor(Math.random() * chars.length)];
                matrix.appendChild(rain);
            }
        }

        // Open chapter in fullscreen
        function openChapter(chapter) {
            // Close any other open chapters first
            document.querySelectorAll('.chapter').forEach(ch => {
                ch.classList.remove('fullscreen', 'active');
            });
            
            // Show overlay
            const overlay = document.getElementById('overlay');
            overlay.classList.add('active');
            
            // Open selected chapter in fullscreen
            chapter.classList.add('fullscreen');
            
            // Prevent body scroll when fullscreen is open
            document.body.style.overflow = 'hidden';
        }

        // Close fullscreen chapter
        function closeChapter() {
            // Remove fullscreen from all chapters
            document.querySelectorAll('.chapter').forEach(ch => {
                ch.classList.remove('fullscreen', 'active');
            });
            
            // Hide overlay
            const overlay = document.getElementById('overlay');
            overlay.classList.remove('active');
            
            // Restore body scroll
            document.body.style.overflow = 'auto';
        }

        // Toggle chapter content (for normal view)
        function toggleChapter(chapter) {
            const isActive = chapter.classList.contains('active');
            
            // Close all chapters
            document.querySelectorAll('.chapter').forEach(ch => {
                ch.classList.remove('active');
            });
            
            // Open clicked chapter if it wasn't active
            if (!isActive) {
                chapter.classList.add('active');
            }
        }

        // Menu toggle (placeholder)
        function toggleMenu() {
            alert('Menu functionality - to be implemented');
        }

        // Close chapter on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeChapter();
            }
        });

        // Initialize matrix rain
        createMatrixRain();

        // Add periodic refresh of matrix characters
        setInterval(() => {
            const rains = document.querySelectorAll('.rain');
            rains.forEach(rain => {
                const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネ{}[]()<>|\\/*-+ABCDEFabcdef';
                rain.textContent = chars[Math.floor(Math.random() * chars.length)];
            });
        }, 300);