# JavaScript_MintingNFT
A Simple Code In Javascript to Mint and List the NFT's We've created and display  It Details and Total number of NFT's in Supply.

 #  Hi folks, 
 I, Lokesh Kumar, will be doing a code of the assessment I completed in MetaCraft JavaScript learning. The assessment required me to create a program that allows me to mint NFTs, store them, and list the NFTs I have created so far.
 
 #  Requirements 
 I will explain the assessment requirements:
 
    |    The mint function - To Mint NFT. 
    |    The list function - To List all created NFTs one by one with the metadata. 
    |    The function to get the total supply of NFTs.

 # How To DO? What I Have Done In this Code:
 1.  Created a dynamic array to store the NFT's(NFT Objects) I will mint in future.
    
         let nftArray = [];
 2.  Mint Function to Mint the NFT, Mint function has three parameters to get the metadata of NFT.

         function mintNFT(_name, _purpose, _color)
   Here _name, _purpose, _color the 3 arguments we need to take to execute this minntNFT function.
   And storing these metadata to a object NFT's properties.

     let nft = {
        name:   _name ,
        purpose: _purpose,
        color:  _color
    };
  and to store the minted NFT to my nftArray, We're using push metod.

       nftArray.push(nft);
  3.  List function to List down the all NFT and it's metadata one by one.
      To do this, we need to traverse the nftArry, In which we have stored our NFT.
      to do traverse we can take help of Loops from index 0  TO last index.
      And with traversing we need to print those objects with their values also.

     for(let i = 0; i < nftArray.length; i++){
        console.log("\n name:    " + nftArray[i].name);
        console.log(" purpose: " + nftArray[i].purpose);
        console.log(" color:   " + nftArray[i].color);
      };

  4.  To print the total NFT's we've minted
       total number of NFTs  i.e Array's length

     console.log("\n Total Supply: " + nftArray.length);

  5.   Calling functions to execute them.

    mintNFT("Mike", "ETH_PROOF", "BLUE");
    mintNFT("Loki", "JS_LEARN", "YELLOW");
    mintNFT("John", "KUNG_FU", "GREY");

    listNFTs();

    getTotalSupply();

A code walkthrough video link:

<a href="https://www.loom.com/share/daa040160d9b429492fad5b2318b0a49">
    <p>Code Walkthrough: Minting and Listing NFTs 🎥 - Watch Video</p>
    <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/daa040160d9b429492fad5b2318b0a49-with-play.gif">
  </a>
 
