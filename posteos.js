
        document.getElementById('loadPosts').addEventListener('click', function() {
            // Realizar la solicitud Fetch a la API
            fetch("/posteos")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la respuesta de la red');
                }
                return response.json(); // Convertir la respuesta en JSON
            })
            .then(data => {
                // Mostrar los datos en el HTML
                let postsDiv = document.getElementById('posts');
                postsDiv.innerHTML = ''; // Limpiar contenido anterior
                data.slice(0, 5).forEach(post => { // Mostrar los primeros 5 posts
                    let postElement = document.createElement('div');
                    postElement.innerHTML = `
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                    `;
                    postsDiv.appendChild(postElement);
                });
            })
            .catch(Error => {
                console.error('Error:', Error);
                document.getElementById('posts').innerHTML = "error";
            });
        });
    