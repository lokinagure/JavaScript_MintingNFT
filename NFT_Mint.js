/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/


//  variable to hold my NFT's
let nftArray = [];


//  Function for minting NFT 
//  When it will be called, we need to give 3 arguments
//  name of NFT, Purpose of NFT and color theme.

function mintNFT (_name, _purpose, _color) {
    let nft = {
        name:   _name ,
        purpose: _purpose,
        color:  _color
    };

//  After minting the NFT will be added to my NFT list of array.
nftArray.push(nft);
}



//  Creating listNFT function to print the metadata of NFT
//  To iterate over all NFT's I've using Loop to iterate all NFT's.

function listNFTs () {
    for(let i = 0; i < nftArray.length; i++){
        console.log("\n name:    " + nftArray[i].name);
        console.log(" purpose: " + nftArray[i].purpose);
        console.log(" color:   " + nftArray[i].color);
    };
}


//  total number of NFTs  i.e Array's length


function getTotalSupply() {
    console.log("\n Total Supply: " + nftArray.length);
}


// Calling function sto execute them.


mintNFT("Mike", "ETH_PROOF", "BLUE");
mintNFT("Loki", "JS_LEARN", "YELLOW");
mintNFT("John", "KUNG_FU", "GREY");

listNFTs();

getTotalSupply();
