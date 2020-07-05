---
layout: default
title: "Howdy"
permalink: /fibbonacci/
---

<button OnClick="outputfib()">fibbonacci</button>
<span id="span"></span>
<script>
    function fib(n) {
        if (n < 3) return 1;
        return fib(n - 2) + fib(n - 1);
      }
function outputfib() {
    const val = 1;
const n=parseInt(val.value, 10);
const span=document.getElementById("span");
span.textContent=fib(n);
}
</script>
