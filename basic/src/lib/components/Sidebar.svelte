<script>
  let sidebarItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
  ];
</script>

<nav class="w-full h-screen bg-gray-800 text-white">
    <ul class="py-4">
        {#each sidebarItems as item}
            <li>
                <a href={item.link} class="block px-4 py-2 hover:bg-gray-700">
                    {item.name}
                </a>
            </li>
        {/each}
    </ul>
</nav>

<style>
    nav {
        width: 240px;
        margin: 0;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        margin: 0;
        padding: 0;
    }

    a {
        color: #fff;
        text-decoration: none;
    }

    a:hover {
        color: #fff;
        text-decoration: none;
    }
</style>
