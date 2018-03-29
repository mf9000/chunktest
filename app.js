var arr = [["otsikko1", "url1", "timestamp1"],["otsikko2", "url2", "timestamp2"],["otsikko3", "url3", "timestamp3"],["otsikko4", "url4", "timestamp4"],["otsikko5", "url5", "timestamp5"],["otsikko6", "url6", "timestamp6"],["otsikko7", "url7", "timestamp7"]]

function chunkArray(arr, chunksize) {
    var chunks = [],
        i = 0,
        n = arr.length;
    while (i < n) {
        chunks.push(arr.slice(i, i += chunksize));
        var len = chunks[chunks.length-1]
        console.log(len);
    }
    return chunks;
}

var a = chunkArray(arr,2)