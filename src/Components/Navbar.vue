 <template>
    <nav class="bg-green-500 text-white px-8 py-4 flex items-center justify-between shadow-lg w-full" >
        <img src="../assets/images/ny.png" class="h-10 w-auto">
        
        <ul class="flex gap-8 text-sm font-medium w-full px-5 justify-end">
            <li><a href="/" class="hover:text-yellow-300">HOME</a></li>
            <li><a href="/About" class="hover:text-yellow-300">About</a></li>
            <li><a href="/Services" class="hover:text-yellow-300">Services</a></li>
            <li class="relative group">
                <a href="#" class="hover:text-yellow-300">Gallery<span> v </span></a>
                <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute left-0 mt-2 w-40 bg-green-800 text-white rounded-md shadow-lg transition-opacity">
                    <li><a href="#" class="block px-4 py-2 hover:bg-green-700">Images</a></li>
                    <li><a href="#" class="block px-4 py-2 hover:bg-green-700">Videos</a></li>
                </ul>
            </li>
             <li class="relative group">
                <a href="#" class="hover:text-yellow-300">Destination<span> v </span></a>
                <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute left-0 mt-2 w-40 bg-green-800 text-white rounded-md shadow-lg transition-opacity">
                    <li><a href="#" class="block px-4 py-2 hover:bg-green-900 ">Kigali</a></li>
                    <li><a href="#" class="block px-4 py-2 hover:bg-green-900">South</a></li>
                     <li><a href="#" class="block px-4 py-2 hover:bg-green-900">West</a></li>
                    <li><a href="#" class="block px-4 py-2 hover:bg-green-900">North </a></li>
                    <li><a href="#" class="block px-4 py-2 hover:bg-green-900">East</a></li>
                </ul>
                </li>
            <li><a href="/Contacts" class="hover:text-yellow-300">Contact</a></li>
        </ul>
    </nav>
</template>


