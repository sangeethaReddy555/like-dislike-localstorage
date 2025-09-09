let a=document.getElementById("like");
        let b=document.getElementById("dis")
        let r=document.getElementById("span")
        let c=parseInt(localStorage.getItem('c')) || 0;
        let s=parseInt (localStorage.getItem('s')) || 0;
        // a.textContent=;
        // b.textContent=s;
        // r.textContent=c+s;
        function add(){
            c++;
            localStorage.setItem('c',c)
            a.textContent=c;
            r.textContent=c+s;
            localStorage.setItem('r',c+s)
        }
        function sub(){
            s++;
            localStorage.setItem('s',s)
            b.textContent=s;
            r.textContent=c+s;
            localStorage.setItem('r',c+s)
        }
        localStorage.clear();