"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9274],{53473:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(85893),r=t(11151);const s={description:"Implementing popular sorting algorithms in Python",tags:["Sorting","Data Structures","Algorithms","Tutorial","Python"]},o="A Guide to Sorting",a={id:"data-structure/sorting-popular",title:"A Guide to Sorting",description:"Implementing popular sorting algorithms in Python",source:"@site/docs/data-structure/sorting-popular.md",sourceDirName:"data-structure",slug:"/data-structure/sorting-popular",permalink:"/portfolio/docs/data-structure/sorting-popular",draft:!1,unlisted:!1,tags:[{label:"Sorting",permalink:"/portfolio/docs/tags/sorting"},{label:"Data Structures",permalink:"/portfolio/docs/tags/data-structures"},{label:"Algorithms",permalink:"/portfolio/docs/tags/algorithms"},{label:"Tutorial",permalink:"/portfolio/docs/tags/tutorial"},{label:"Python",permalink:"/portfolio/docs/tags/python"}],version:"current",frontMatter:{description:"Implementing popular sorting algorithms in Python",tags:["Sorting","Data Structures","Algorithms","Tutorial","Python"]},sidebar:"tutorialSidebar",previous:{title:"A Guide to Hashing",permalink:"/portfolio/docs/data-structure/hash"},next:{title:"Exploratory Data Analysis",permalink:"/portfolio/docs/eda/"}},l={},d=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"Why Sort?",id:"why-sort",level:3},{value:"Code Quest Begins",id:"code-quest-begins",level:3},{value:"2. Bubble Sort",id:"2-bubble-sort",level:2},{value:"Pythonic Bubbles",id:"pythonic-bubbles",level:3},{value:"3. Merge Sort",id:"3-merge-sort",level:2},{value:"Pythonic Tea Ceremony",id:"pythonic-tea-ceremony",level:3},{value:"4. Insertion Sort",id:"4-insertion-sort",level:2},{value:"Pythonic Card Tricks",id:"pythonic-card-tricks",level:3},{value:"5. Quick Sort",id:"5-quick-sort",level:2},{value:"Pythonic Dance Moves",id:"pythonic-dance-moves",level:3},{value:"6. Heap Sort",id:"6-heap-sort",level:2},{value:"Pythonic Library Stacks",id:"pythonic-library-stacks",level:3},{value:"7. Tim Sort",id:"7-tim-sort",level:2},{value:"Pythonic Incantations",id:"pythonic-incantations",level:3},{value:"8. Radix Sort",id:"8-radix-sort",level:2},{value:"Pythonic Incantations",id:"pythonic-incantations-1",level:3},{value:"9. When to Use Which Sorting Algorithm",id:"9-when-to-use-which-sorting-algorithm",level:2},{value:"The Sorting Compass",id:"the-sorting-compass",level:3},{value:"Decision-Making Elixirs",id:"decision-making-elixirs",level:3},{value:"Parting Spell",id:"parting-spell",level:3}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"a-guide-to-sorting",children:"A Guide to Sorting"}),"\n",(0,i.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,i.jsx)(n.p,{children:"Sorting is like tidying up your room after a wild party. But instead of picking up empty cups and crumpled napkins, we're wrangling data. Imagine a chaotic array of numbers, letters, or even mystical runes (hey, we don't judge). Our mission? To transform this unruly mess into a neat, orderly sequence."}),"\n",(0,i.jsx)(n.h3,{id:"why-sort",children:"Why Sort?"}),"\n",(0,i.jsx)(n.p,{children:"Before we dive into the nitty-gritty, let's ponder the cosmic significance of sorting. Why bother? Well, my fellow data voyagers, sorting isn't just about aesthetics. It's about efficiency, searchability, and making sense of the universe (okay, maybe not the last part)."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Searchability:"}),' Imagine a phone book (remember those?). Without sorting, finding "Zachary Zebra" would involve flipping through pages like a caffeinated squirrel. Sorted? Bam!']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Efficiency:"})," Algorithms crave efficiency like a cat craves sunbeams. Sorting helps us optimize search, merge datasets, and prepare data for other operations. Efficiency is our golden ticket to algorithmic stardom."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"code-quest-begins",children:"Code Quest Begins"}),"\n",(0,i.jsx)(n.p,{children:"In the upcoming sections, we'll delve into sorting algorithms. We'll write Python code and explore their strengths, weaknesses, and secret handshakes. Brace yourselves for practical tips, eureka moments, and maybe a meme or two."}),"\n",(0,i.jsx)(n.p,{children:"So grab your favorite caffeinated beverage (mine's a double-shot espresso), open your Python IDE, and let's embark on this sorting odyssey. Remember, sorting isn't just about order\u2014it's about finding beauty in chaos. \ud83c\udf1f\ud83d\udd0d\ud83d\udc0d"}),"\n",(0,i.jsx)(n.h2,{id:"2-bubble-sort",children:"2. Bubble Sort"}),"\n",(0,i.jsx)(n.p,{children:"Bubble Sort's dance moves are simple:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Bubble Up:"})," Imagine bubbles rising in a fizzy soda. Similarly, Bubble Sort compares adjacent elements in your list. If they're out of order, it swaps them."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Repeat:"}),' Keep bubbling up the list until everything settles into place. It\'s like a never-ending game of "Is this in the right order?"']}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"pythonic-bubbles",children:"Pythonic Bubbles"}),"\n",(0,i.jsx)(n.p,{children:"Let's brew some Python tea. Here's our Bubble Sort recipe:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="Python"',children:'def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        # Last i elements are already sorted\n        for j in range(0, n - i - 1):\n            if arr[j] > arr[j + 1]:\n                # Swap adjacent elements\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n\n\n# Example usage\nmy_list = [5, 2, 9, 1, 5, 6]\nbubble_sort(my_list)\nprint("Sorted list:", my_list)\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Sorted list: [1, 2, 5, 5, 6, 9]\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Bubble Sort isn't the fastest kid on the block. It's like the tortoise in the sorting race. But hey, it gets the job done eventually."}),"\n",(0,i.jsx)(n.li,{children:"If your list is mostly sorted already, Bubble Sort performs better. It's like tidying up a room that's already fairly neat."}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"3-merge-sort",children:"3. Merge Sort"}),"\n",(0,i.jsxs)(n.p,{children:["Merge Sort follows a simple yet profound philosophy: ",(0,i.jsx)(n.strong,{children:"divide and conquer"}),". It's like splitting a giant puzzle into smaller, solvable pieces. Here's the playbook:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Divide:"})," Take your unsorted list and split it into halves. Keep doing this until you have tiny, sorted sublists. Think of it as a peaceful tea ceremony\u2014each cup represents a sublist."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Conquer:"})," Now, merge those sublists back together. But not haphazardly! Merge them in a way that maintains order. Imagine arranging tea cups by size\u2014small to large."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Repeat:"})," Keep dividing, conquering, and merging until your entire list is sorted. It's like assembling a thousand origami cranes\u2014one fold at a time."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"pythonic-tea-ceremony",children:"Pythonic Tea Ceremony"}),"\n",(0,i.jsx)(n.p,{children:"Let's brew some Python code, shall we? Our teapot (read: Python IDE) awaits:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="Python"',children:'def merge_sort(arr):\n    if len(arr) <= 1:\n        return arr  # Already sorted or empty\n\n    # Divide: Split the list into halves\n    mid = len(arr) // 2\n    left_half = arr[:mid]\n    right_half = arr[mid:]\n\n    # Recursively sort each half\n    left_sorted = merge_sort(left_half)\n    right_sorted = merge_sort(right_half)\n\n    # Conquer: Merge the sorted halves\n    return merge(left_sorted, right_sorted)\n\n\ndef merge(left, right):\n    result = []\n    left_idx, right_idx = 0, 0\n\n    while left_idx < len(left) and right_idx < len(right):\n        if left[left_idx] < right[right_idx]:\n            result.append(left[left_idx])\n            left_idx += 1\n        else:\n            result.append(right[right_idx])\n            right_idx += 1\n\n    # Handle remaining elements (if any)\n    result.extend(left[left_idx:])\n    result.extend(right[right_idx:])\n    return result\n\n\n# Example usage\nmy_list = [5, 2, 9, 1, 5, 6]\nsorted_list = merge_sort(my_list)\nprint("Sorted list:", sorted_list)\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Sorted list: [1, 2, 5, 5, 6, 9]\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Merge Sort is like a calm river flowing through your data. It's stable, predictable, and won't surprise you with sudden rapids."}),"\n",(0,i.jsx)(n.li,{children:"Its time complexity? A soothing O(n log n). Perfect for contemplative evenings."}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"4-insertion-sort",children:"4. Insertion Sort"}),"\n",(0,i.jsx)(n.p,{children:"Imagine you're holding a deck of playing cards. Your goal? Arrange them in ascending order. Here's how Insertion Sort plays the game:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Virtual Split:"})," The array is virtually split into two parts: the ",(0,i.jsx)(n.strong,{children:"sorted"})," and the ",(0,i.jsx)(n.strong,{children:"unsorted"}),". The sorted part starts empty, like an empty card table."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Pick and Place:"})," From the unsorted part, pick a card (element) and place it in its correct position within the sorted part. It's like adding a card to your sorted hand."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Repeat:"})," Keep picking cards from the unsorted part and inserting them into the sorted part. Each insertion expands the sorted section."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"pythonic-card-tricks",children:"Pythonic Card Tricks"}),"\n",(0,i.jsx)(n.p,{children:"Let's shuffle our Python deck and perform some card magic (no top hats required):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="Python"',children:'def insertion_sort(arr):\n    for i in range(1, len(arr)):\n        key = arr[i]  # The card we\'re inserting\n        j = i - 1\n\n        # Compare with cards in the sorted part\n        while j >= 0 and arr[j] > key:\n            arr[j + 1] = arr[j]  # Shift larger cards to the right\n            j -= 1\n\n        arr[j + 1] = key  # Insert the card in its correct position\n\n\n# Example usage\nmy_cards = [5, 2, 9, 1, 5, 6]\ninsertion_sort(my_cards)\nprint("Sorted cards:", my_cards)\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Sorted cards: [1, 2, 5, 5, 6, 9]\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Insertion Sort is like arranging cards in your hand. It's simple, stable, and patient."}),"\n",(0,i.jsx)(n.li,{children:"Use it when your list is small or nearly sorted. It's not the fastest, but it's reliable."}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"5-quick-sort",children:"5. Quick Sort"}),"\n",(0,i.jsxs)(n.p,{children:["Quick Sort's secret sauce? ",(0,i.jsx)(n.strong,{children:"Pivoting"}),". Imagine a dance floor where elements groove to the beat. Here's how it works:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Choose a Pivot:"})," Our DJ (that's you) picks an element from the list. This chosen one is the pivot\u2014the life of the party."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Partitioning:"})," Now, let's create two groups: those who dance better than the pivot and those who need a few lessons. Elements greater than the pivot join the cool kids' club, while the rest form their own clique."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Repeat:"})," Recursively apply Quick Sort to both groups. It's like splitting the dance floor into smaller circles, each with its own pivot."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"pythonic-dance-moves",children:"Pythonic Dance Moves"}),"\n",(0,i.jsx)(n.p,{children:"Grab your Python dancing shoes (they're neon green, trust me) and let's write some code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="Python"',children:'def quick_sort(arr):\n    if len(arr) <= 1:\n        return arr  # Already sorted or empty\n\n    pivot = arr[len(arr) // 2]  # Choose a pivot\n    left, equal, right = [], [], []\n\n    for element in arr:\n        if element < pivot:\n            left.append(element)\n        elif element == pivot:\n            equal.append(element)\n        else:\n            right.append(element)\n\n    # Recursively sort the partitions\n    return quick_sort(left) + equal + quick_sort(right)\n\n\n# Example usage\nmy_list = [8, 3, 1, 6, 4, 7]\nsorted_list = quick_sort(my_list)\nprint("Sorted list:", sorted_list)\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Sorted list: [1, 3, 4, 6, 7, 8]\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Quick Sort is like a DJ remixing your playlist. It's fast, unpredictable, and occasionally drops the bass (or swaps elements)."}),"\n",(0,i.jsx)(n.li,{children:"Its average-case time complexity? A lightning-quick O(n log n). Perfect for impromptu dance-offs."}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"6-heap-sort",children:"6. Heap Sort"}),"\n",(0,i.jsxs)(n.p,{children:["Imagine a library with neatly stacked books. Each book has a priority (think Dewey Decimal System). Heap Sort builds a ",(0,i.jsx)(n.strong,{children:"binary heap"}),", which is like a well-behaved tree. Here's the hushed process:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Heapify:"}),' Arrange your unsorted list into a binary heap. It\'s like whispering to the books, "Find your proper place, my dear."']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Sorting Act:"})," Extract the root (highest priority) element and replace it with the last leaf. Then, restore the heap property. Repeat until the entire heap is sorted. It's like a silent ballet\u2014graceful and efficient."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"pythonic-library-stacks",children:"Pythonic Library Stacks"}),"\n",(0,i.jsx)(n.p,{children:"Let's tiptoe through the code stacks (no shushing required):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="Python"',children:'def heapify(arr, n, root):\n    largest = root\n    left_child = 2 * root + 1\n    right_child = 2 * root + 2\n\n    if left_child < n and arr[left_child] > arr[largest]:\n        largest = left_child\n\n    if right_child < n and arr[right_child] > arr[largest]:\n        largest = right_child\n\n    if largest != root:\n        arr[root], arr[largest] = arr[largest], arr[root]\n        heapify(arr, n, largest)\n\n\ndef heap_sort(arr):\n    n = len(arr)\n\n    # Build a max heap\n    for i in range(n // 2 - 1, -1, -1):\n        heapify(arr, n, i)\n\n    # Extract elements one by one\n    for i in range(n - 1, 0, -1):\n        arr[i], arr[0] = arr[0], arr[i]  # Swap root with last element\n        heapify(arr, i, 0)\n\n\n# Example usage\nmy_list = [12, 11, 13, 5, 6, 7]\nheap_sort(my_list)\nprint("Sorted list:", my_list)\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Sorted list: [5, 6, 7, 11, 12, 13]\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Heap Sort is like a librarian who alphabetizes books without making a sound. Its time complexity? A hushed O(n log n)."}),"\n",(0,i.jsx)(n.li,{children:"Use it when you need a sorted list but don't want to disturb the other algorithms at the party."}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"7-tim-sort",children:"7. Tim Sort"}),"\n",(0,i.jsx)(n.p,{children:"Tim Sort isn't your average sorting hero. It's a hybrid, a fusion of ancient wisdom and modern pragmatism. Picture this:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Merge Sort Meets Insertion Sort:"})," Tim Sort marries the elegance of Merge Sort with the practicality of Insertion Sort. It's like inviting Gandalf and Hermione to the same tea party."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Gallop, Gallop, Gallop:"})," Tim Sort gallops through your list, sniffing out order like a seasoned detective. It's adaptive\u2014gentle with nearly sorted data, fierce when chaos reigns."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"The Power of Runs:"})," Tim Sort breaks your list into ",(0,i.jsx)(n.strong,{children:"runs"}),"\u2014chunks of sorted or semi-sorted elements. Then it merges these runs, creating harmony in the chaos."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"pythonic-incantations",children:"Pythonic Incantations"}),"\n",(0,i.jsx)(n.p,{children:"Let's weave some Python spells (no wands required, just code):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="Python"',children:'def tim_sort(arr):\n    min_run = 32  # Minimum size of a run\n    n = len(arr)\n\n    # Create runs\n    for start in range(0, n, min_run):\n        end = min(start + min_run, n)\n        insertion_sort(arr, start, end)\n\n    # Merge runs\n    size = min_run\n    while size < n:\n        for start in range(0, n, 2 * size):\n            mid = min(start + size, n)\n            end = min(start + 2 * size, n)\n            merge(arr, start, mid, end)\n        size *= 2\n\n\ndef insertion_sort(arr, start, end):\n    # Insertion Sort within a run\n    for i in range(start + 1, end):\n        key = arr[i]\n        j = i - 1\n        while j >= start and arr[j] > key:\n            arr[j + 1] = arr[j]\n            j -= 1\n        arr[j + 1] = key\n\n\ndef merge(arr, start, mid, end):\n    # Merge two runs\n    left, right = arr[start:mid], arr[mid:end]\n    i, j, k = 0, 0, start\n\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            arr[k] = left[i]\n            i += 1\n        else:\n            arr[k] = right[j]\n            j += 1\n        k += 1\n\n    arr[k:end] = left[i:] + right[j:]\n\n\n# Example usage\nmy_list = [10, 7, 3, 8, 5, 1]\ntim_sort(my_list)\nprint("Sorted list:", my_list)\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Sorted list: [1, 3, 5, 7, 8, 10]\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Tim Sort is like a seasoned traveler who adapts to any terrain. Its time complexity? A mystical O(n log n)."}),"\n",(0,i.jsx)(n.li,{children:"Use it when you need stability and efficiency."}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"8-radix-sort",children:"8. Radix Sort"}),"\n",(0,i.jsxs)(n.p,{children:["Radix Sort doesn't play by the usual rules. It's not concerned with comparisons or pivots. Instead, it focuses on the ",(0,i.jsx)(n.strong,{children:"magical digits"})," within numbers. Here's the incantation:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Least Significant Digit (LSD) Variant:"})," Imagine sorting playing cards by their suit. Radix Sort starts with the rightmost digit (the least significant) and arranges the cards into buckets (one for each digit). Then it repeats the process for the tens place, hundreds place, and so on. Like a patient librarian organizing a chaotic bookshelf."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Most Significant Digit (MSD) Variant:"})," This time, Radix Sort begins with the leftmost digit (the most significant). It's like sorting books by their genre\u2014first all the mysteries, then the romances, and so forth. The process continues recursively until the entire list is sorted."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"pythonic-incantations-1",children:"Pythonic Incantations"}),"\n",(0,i.jsx)(n.p,{children:"Let's summon our Python spellbook and write some code runes:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="Python"',children:'def radix_sort(arr):\n    max_digit_count = len(str(max(arr)))  # Maximum number of digits\n\n    for digit_position in range(max_digit_count):\n        buckets = [[] for _ in range(10)]  # Create 10 magical buckets\n\n        for num in arr:\n            digit = (num // 10**digit_position) % 10\n            buckets[digit].append(num)\n\n        arr = [num for bucket in buckets for num in bucket]\n\n    return arr\n\n\n# Example usage\nmy_numbers = [123, 45, 789, 12, 567, 890]\nsorted_numbers = radix_sort(my_numbers)\nprint("Sorted numbers:", sorted_numbers)\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Sorted numbers: [12, 45, 123, 567, 789, 890]\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Radix Sort is like a numerologist arranging cosmic energies. Its time complexity? A mystical O(nk), where k is the number of digits."}),"\n",(0,i.jsx)(n.li,{children:"Use it when you want to sort numbers without comparing their souls (I mean values)."}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"9-when-to-use-which-sorting-algorithm",children:"9. When to Use Which Sorting Algorithm"}),"\n",(0,i.jsx)(n.p,{children:"Dear data voyagers, let's don our sorting hats and discuss the art of algorithmic decision-making. Choosing the right sorting spell for the job is like selecting the perfect wand\u2014essential for a magical outcome. \ud83c\udf1f\ud83d\udd2e"}),"\n",(0,i.jsx)(n.h3,{id:"the-sorting-compass",children:"The Sorting Compass"}),"\n",(0,i.jsx)(n.p,{children:"Before we dive into specifics, let's consult our sorting compass:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Bubble Sort:"})," Use it when your list is small or nearly sorted. It's like tidying up a room that's already fairly neat. But beware\u2014it's not the fastest broomstick in the sky."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Merge Sort:"})," When stability and predictability matter, Merge Sort is your go-to."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Insertion Sort:"})," It's like arranging cards in your hand. Use it when your list is small or nearly sorted. It's not the fastest, but it's reliable."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Quick Sort:"})," When you need raw speed, summon Quick Sort. Just keep an eye on its worst-case mood swings\u2014it can trip over its own shoelaces."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Heap Sort:"})," Heap Sort builds a binary heap, using space efficiently. Use it when you want reliability without fanfare."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Tim Sort:"})," Tim Sort combines Merge Sort and Insertion Sort. It's adaptive and stable. When in doubt, trust Tim\u2014it's like having a Gandalf-Hermione hybrid on your team."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Radix Sort:"})," Radix Sort sorts numbers by their digits. Use it when you want to sort without comparing values."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"decision-making-elixirs",children:"Decision-Making Elixirs"}),"\n",(0,i.jsx)(n.p,{children:"Here are some practical guidelines:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Small Lists:"})," For tiny lists, Bubble Sort is the friendly neighbor who pops over for a cup of sugar. It's simple, but don't invite it to a royal ball (large lists)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Nearly Sorted Data:"})," Merge Sort is the calm river flowing through your data garden. It's stable and predictable. Use it when your data is already in a zen-like state."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Speed Demons:"})," Quick Sort is the adrenaline junkie. When you need raw speed, Quick Sort pivots and dances faster than a caffeinated squirrel. Just keep an eye on its worst-case mood swings."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Binary Heap Magic:"}),' Heap Sort is the minimalist librarian. It builds a binary heap, using space efficiently. When memory is scarce, Heap Sort whispers, "Fear not, I won\'t clutter your RAM."']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Pythonic Charm:"})," Tim Sort is Python's own. It adapts, blends, and knows the best pizza joints. When in doubt, trust Tim\u2014it's seen more magic than Merlin."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Digit Sorcery:"})," Radix Sort sorts by digits. It's like numerology for numbers. Use it when you want to sort without comparing values."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Card Arrangement:"})," Insertion Sort is the gentle card arranger. Use it when your list is small or nearly sorted. It's not the fastest, but it's reliable."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"parting-spell",children:"Parting Spell"}),"\n",(0,i.jsx)(n.p,{children:"So, fellow enchanters, choose wisely. Whether you're organizing a potion cabinet or sorting a massive dataset, remember: each algorithm has its own wand, and the right one can turn chaos into enchantment. \ud83c\udf1f\ud83d\udd2e\ud83d\udcdc"}),"\n",(0,i.jsx)(n.p,{children:"Now, go forth and sort\u2014may your lists be ordered!"})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(67294);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);