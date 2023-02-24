let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let network = ['.com','.net']
 
for (let itemA of pronoun) {
    for (let itemB of adj){
        for(let itemC of noun){
            console.log(`${itemA}${itemB}${itemC.slice(0,itemC.length-2)}.${itemC.slice(itemC.length-2)}`)
        }
    }
}


for (let itemA of pronoun) {
    for (let itemB of adj){
        for(let itemC of noun){
            for (itemD of network){
                console.log(`${itemA}${itemB}${itemC}${itemD}`)
            }
        }
    }
}



//(function createUrl (x, y, z){
    let final = [];
    for (let i = 0; i < x.length; i++){
        for (let j = 0, k = 0, m = y.length, n = z.length; j < m; j++){
            final.push([pronoun[i], adj[j], noun[k]]);
            if (j == m - 1 && k < n - 1){
               k++;
               j = -1;
            }
        }
    }
    console.log(final);
//})(pronoun, adj, noun);


