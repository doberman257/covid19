(this.webpackJsonpcorona=this.webpackJsonpcorona||[]).push([[0],{20:function(e,t,a){e.exports=a(45)},25:function(e,t,a){},27:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),c=a.n(o),l=(a(25),a(7)),s=a.n(l),i=a(18),u=a(2),m=a(3),d=a(4),h=a(6),v=a(5),f=(a(27),a(19)),y=a.n(f),p=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.countries,a=e.onSortByTotalConfirmed,n=e.onSortByTotalDeath,o=e.onSortByTotalRecovered,c=e.onSortByTotalActive;return r.a.createElement("div",{className:"tables container"},r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col-"},"Country"),r.a.createElement("th",{scope:"col-"},r.a.createElement("a",{href:"/",onClick:a},"Cases")),r.a.createElement("th",{scope:"col"},r.a.createElement("a",{href:"/",onClick:o},"Recoverd")),r.a.createElement("th",{scope:"col"},r.a.createElement("a",{href:"/",onClick:n},"Death")),r.a.createElement("th",{scope:"col"},r.a.createElement("a",{href:"/",onClick:c},"Active")))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e.countryName},r.a.createElement("td",null,e.countryName),r.a.createElement("td",null,e.confirmed),r.a.createElement("td",null,e.recovered),r.a.createElement("td",null,e.deaths),r.a.createElement("td",null,e.active))})))))}}]),a}(r.a.Component),E=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={totalConfirmed:0,totalDeaths:0,totalRecovered:0,countries:[]},e.url="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv",e.sortByTotalConfirmed=function(e,t){return t.confirmed<e.confirmed?-1:t.confirmed>e.confirmed?1:0},e.onSortByTotalConfirmed=function(t){t.preventDefault();var a=Object(u.a)(e.state.countries);a.sort(e.sortByTotalConfirmed),e.setState({countries:a})},e.sortByTotalDeath=function(e,t){return t.deaths<e.deaths?-1:t.deaths>e.deaths?1:0},e.onSortByTotalDeath=function(t){t.preventDefault();var a=Object(u.a)(e.state.countries);a.sort(e.sortByTotalDeath),e.setState({countries:a})},e.sortByTotalRecovered=function(e,t){return t.recovered<e.recovered?-1:t.recovered>e.recovered?1:0},e.onSortByTotalRecovered=function(t){t.preventDefault();var a=Object(u.a)(e.state.countries);a.sort(e.sortByTotalRecovered),e.setState({countries:a})},e.sortByTotalActive=function(e,t){return t.active<e.active?-1:t.active>e.active?1:0},e.onSortByTotalActive=function(t){t.preventDefault();var a=Object(u.a)(e.state.countries);a.sort(e.sortByTotalActive),e.setState({countries:a})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n,r,o,c,l,i,u,m,d,h,v;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(this.url);case 2:for(t=e.sent,a=t.data.split("\n"),n=0,r=0,o=0,c=[],l=1;l<a.length;l++)i=a[l].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/),u=i[0],m=Number(i[4]),d=Number(i[5]),h=Number(i[6]),v=Number(i[7]),""!==u&&(c.push({countryName:u,confirmed:m,deaths:d,recovered:h,active:v}),n+=m,o+=h,r+=d);return e.next=11,new Promise((function(e){return setTimeout(e,500)}));case 11:this.setState({countries:c,totalRecovered:o,totalDeaths:r,totalConfirmed:n});case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"numberWithCommas",value:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{key:"render",value:function(){var e=this.state,t=e.countries,a=e.totalConfirmed,n=e.totalDeaths,o=e.totalRecovered;return r.a.createElement("div",{className:""},r.a.createElement("h1",{className:"mb-3 center text-center "},"COVID-19 Corona"),r.a.createElement("div",{className:"row container total text-center "},r.a.createElement("div",{className:"confirmed col"},r.a.createElement("h5",null,"Cases"),r.a.createElement("span",{className:"font-weight-bold"},this.numberWithCommas(a))),r.a.createElement("div",{className:"recovered col"},r.a.createElement("h5",{className:""},"Recovered"),r.a.createElement("span",{className:"font-weight-bold "},this.numberWithCommas(o))),r.a.createElement("div",{className:"death col"},r.a.createElement("h5",null,"Deaths"),r.a.createElement("span",{className:"font-weight-bold"},this.numberWithCommas(n)))),0===a?r.a.createElement("h3",{className:"container"},"Loading..."):r.a.createElement(p,{countries:t,onSortByTotalConfirmed:this.onSortByTotalConfirmed,onSortByTotalDeath:this.onSortByTotalDeath,onSortByTotalRecovered:this.onSortByTotalRecovered,onSortByTotalActive:this.onSortByTotalActive}))}}]),a}(r.a.Component);c.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.5959c915.chunk.js.map