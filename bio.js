const bio = {
  "title": "What I do",
  "btm-line" : '',
  "desc": " I'm a Web designer and also a Designer, I work in the illustration niche, as well as graphic and motion design, photography, and combine them with other visual arts. I work with commercial and social projects of any scale and bring every work to the highest level of perfection.",
  
};

let bioHtml = "";
bioHtml += `

<h2 class="section-title"> ${bio.title} </h2>
<div class="bottom-line"> </div>
<p class = 'lead'> ${bio.desc}</p>
`;
document.querySelector(".bio").innerHTML = bioHtml;

