var dappAbi = {
  "contractName": "DAPP",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "totalCampaigns",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "_name",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_campaignId",
          "type": "uint32"
        },
        {
          "name": "_supply",
          "type": "uint24"
        },
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_price",
          "type": "uint104"
        }
      ],
      "name": "createCertificate",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "campaignEscrowAmount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_campaignId",
          "type": "uint256"
        }
      ],
      "name": "readyCampaign",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "approvedFor",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "manager",
          "type": "address"
        }
      ],
      "name": "addManager",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "getTotalCampaignsForOwner",
      "outputs": [
        {
          "name": "total",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "campaignOwnerTotalCampaigns",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "founderAddress",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_campaignId",
          "type": "uint256"
        }
      ],
      "name": "activateCampaign",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getCampaign",
      "outputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "campaignName",
          "type": "string"
        },
        {
          "name": "taxId",
          "type": "string"
        },
        {
          "name": "active",
          "type": "bool"
        },
        {
          "name": "veto",
          "type": "bool"
        },
        {
          "name": "ready",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "tokensOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_campaignEscrowAmount",
          "type": "uint64"
        }
      ],
      "name": "changeEscrowAmount",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "maxCertificates",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_campaignId",
          "type": "uint256"
        },
        {
          "name": "_certificateIdx",
          "type": "uint64"
        }
      ],
      "name": "getCertificate",
      "outputs": [
        {
          "name": "campaignId",
          "type": "uint256"
        },
        {
          "name": "supply",
          "type": "uint24"
        },
        {
          "name": "remaining",
          "type": "uint24"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "price",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "campaignCertificateCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "campaignOwnerToIndexes",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_campaignId",
          "type": "uint256"
        },
        {
          "name": "_certificateIdx",
          "type": "uint256"
        },
        {
          "name": "_supply",
          "type": "uint24"
        },
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_price",
          "type": "uint256"
        }
      ],
      "name": "updateCertificate",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "_symbol",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "campaignManagers",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "selfDestruct",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "campaignCertificates",
      "outputs": [
        {
          "name": "campaignId",
          "type": "uint256"
        },
        {
          "name": "price",
          "type": "uint256"
        },
        {
          "name": "supply",
          "type": "uint24"
        },
        {
          "name": "remaining",
          "type": "uint24"
        },
        {
          "name": "name",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_maxCertificates",
          "type": "uint256"
        }
      ],
      "name": "changeMaxCertificates",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "manager",
          "type": "address"
        }
      ],
      "name": "removeManager",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_campaignId",
          "type": "uint256"
        }
      ],
      "name": "withdrawCampaignBalance",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_campaignId",
          "type": "uint256"
        }
      ],
      "name": "vetoCampaign",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "takeOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "campaignBalance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalRaised",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "campaignIndexToOwner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_campaignId",
          "type": "uint128"
        },
        {
          "name": "_certificateIdx",
          "type": "uint256"
        }
      ],
      "name": "createToken",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getToken",
      "outputs": [
        {
          "name": "campaignId",
          "type": "uint256"
        },
        {
          "name": "value",
          "type": "uint256"
        },
        {
          "name": "unitNumber",
          "type": "uint24"
        },
        {
          "name": "purchaser",
          "type": "address"
        },
        {
          "name": "certificateIdx",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_campaignId",
          "type": "uint256"
        }
      ],
      "name": "getCampaignBalance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_campaignName",
          "type": "string"
        },
        {
          "name": "_taxid",
          "type": "string"
        }
      ],
      "name": "createCampaign",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "getCampaignIdByOwnerIndex",
      "outputs": [
        {
          "name": "id",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "campaignId",
          "type": "uint256"
        }
      ],
      "name": "ReadyCampaign",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "campaignId",
          "type": "uint256"
        }
      ],
      "name": "ActivateCampaign",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "campaignId",
          "type": "uint256"
        }
      ],
      "name": "VetoCampaign",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "campaignId",
          "type": "uint256"
        }
      ],
      "name": "CreateCampaign",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "campaignId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "name",
          "type": "string"
        }
      ],
      "name": "CreateCertificate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "campaignId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "certificateIdx",
          "type": "uint256"
        }
      ],
      "name": "UpdateCertificate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "campaignId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "certificateIdx",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "CreateToken",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "campaignId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "balance",
          "type": "uint256"
        }
      ],
      "name": "WithdrawBalance",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_approved",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    }
  ],
  "bytecode": "0x60606040526064600955600060108190556011556013805460ff1916905534156200002957600080fd5b60058054600160a060020a0333908116600160a060020a0319928316811790935560068054909216831790915560009182526012602052604091829020805460ff19166001179055620000cd91805190810160405280601081526020017f47656e657369732043616d706169676e00000000000000000000000000000000815250602060405190810160405260008152640100000000620022be6200014682021704565b50620001206000600160408051908101604052601381527f47656e65736973204365727469666963617465000000000000000000000000006020820152600064010000000062001d946200031d82021704565b506200013f60008080338164010000000062002124620004be82021704565b5062000b0b565b600062000152620007c1565b600060c06040519081016040908152600160a060020a03881682526020820187905281018590526000606082018190526080820181905260a082015260078054919350600191808301620001a7838262000808565b6000928352602090922085916004020181518154600160a060020a031916600160a060020a0391909116178155602082015181600101908051620001f09291602001906200083c565b506040820151816002019080516200020d9291602001906200083c565b50606082015160038201805460ff191691151591909117905560808201516003820180549115156101000261ff001990921691909117905560a082015160039091018054911515620100000262ff00001990921691909117905550036000818152600a602090815260408083208054600160a060020a038c16600160a060020a031990911681179091558352600b909152902080549192509060018101620002b68382620008c1565b506000918252602080832091909101839055600160a060020a038816808352600c9091526040918290208054600101905582917f8947cb78db2ffa53132a4e627ea0e20920cf6edd68b7b07989687e1a28e0bac7905160405180910390a395945050505050565b600062000329620008e8565b600060a06040519081016040908152888252602080830187905262ffffff891682840181905260608401526080830188905260008a8152600e90915220805491935090600181016200037c838262000929565b600092835260209092208491600402018151815560208201518160010155604082015160028201805462ffffff191662ffffff9290921691909117905560608201518160020160036101000a81548162ffffff021916908362ffffff160217905550608082015181600301908051620003fa9291602001906200083c565b5050506000888152600f6020526040908190208054600101905590915087907fbcc78462243df19ab0f6e9bff38bc47cc381cc4600d2e33e08232d5f78e0e8939087905160208082528190810183818151815260200191508051906020019080838360005b83811015620004795780820151838201526020016200045f565b50505050905090810190601f168015620004a75780820380516001836020036101000a031916815260200191505b509250505060405180910390a29695505050505050565b6000620004ca62000958565b600060a060405190810160409081528982526020808301879052600160a060020a0388168284015262ffffff89166060840152608083018a905260008b8152600e909152208054919350600191899081106200052257fe5b60009182526020909120600260049092020101805462ffffff63010000008083048216949094031690920265ffffff00000019909216919091179055600880546001810162000572838262000986565b6000928352602090922084916004020181518155602082015181600101556040820151600282018054600160a060020a031916600160a060020a039290921691909117905560608201518160020160146101000a81548162ffffff021916908362ffffff16021790555060808201516003909101555090506200060485826401000000006200278f6200064782021704565b84600160a060020a031687897f3ffd4886872bbfb79239c94b42e59f56b5e810f72259627f1af658ccc35bc8fb60405160405180910390a4979650505050505050565b600160a060020a03821615156200065d57600080fd5b620006778282640100000000620026ca620006ba82021704565b81600160a060020a031660007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405190815260200160405180910390a35050565b600081815260016020526040812054600160a060020a031615620006dd57600080fd5b60008281526001602052604090208054600160a060020a031916600160a060020a0385161790556200071d836401000000006200078f8102620012bd1704565b600160a060020a0384166000908152600360205260409020805491925090600181016200074b8382620008c1565b5060009182526020808320919091018490558382526004905260408120829055546200078790600164010000000062002803620007aa82021704565b600055505050565b600160a060020a031660009081526003602052604090205490565b600082820183811015620007ba57fe5b9392505050565b60c06040519081016040526000815260208101620007de620009b5565b8152602001620007ed620009b5565b81526000602082018190526040820181905260609091015290565b8154818355818115116200083757600402816004028360005260206000209182019101620008379190620009c7565b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200087f57805160ff1916838001178555620008af565b82800160010185558215620008af579182015b82811115620008af57825182559160200191906001019062000892565b50620008bd92915062000a21565b5090565b81548183558181151162000837576000838152602090206200083791810190830162000a21565b60a0604051908101604052806000815260200160008152602001600062ffffff168152602001600062ffffff16815260200162000924620009b5565b905290565b815481835581811511620008375760040281600402836000526020600020918201910162000837919062000a3e565b60a0604051908101604090815260008083526020830181905290820181905260608201819052608082015290565b815481835581811511620008375760040281600402836000526020600020918201910162000837919062000a84565b60206040519081016040526000815290565b62000a1e91905b80821115620008bd578054600160a060020a03191681556000620009f6600183018262000ac0565b62000a0660028301600062000ac0565b5060038101805462ffffff19169055600401620009ce565b90565b62000a1e91905b80821115620008bd576000815560010162000a28565b62000a1e91905b80821115620008bd5760008082556001820181905560028201805465ffffffffffff1916905562000a7a600383018262000ac0565b5060040162000a45565b62000a1e91905b80821115620008bd57600080825560018201819055600282018054600160b860020a0319169055600382015560040162000a8b565b50805460018160011615610100020316600290046000825580601f1062000ae8575062000b08565b601f01602090049060005260206000209081019062000b08919062000a21565b50565b612b768062000b1b6000396000f30060606040526004361061022f5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166302932f56811461023457806306fdde0314610259578063095ea7b3146102e3578063135c442314610307578063173071341461037f57806318160ddd1461039257806319ad9577146103a55780632a6dd48f146103bb5780632d06177a146103ed5780632d85ea121461040c5780633da70bd51461042b5780633f4ba83a1461044a57806346bb28331461045d578063493f1726146104705780635598f8cc146104865780635a3f2672146105a85780635c975abb1461061a5780635cceb24b146106415780636352211e1461066157806370a08231146106775780637204ca151461069657806381cdb4c3146106a95780638456cb59146107675780638da5cb5b1461077a57806390722b751461078d57806391417542146107a3578063955202f8146107c557806395d89b411461082b5780639c0d9c3b1461083e5780639cb8a26a1461085d578063a5f8777514610870578063a9059cbb146108e4578063a9cd4a1f14610906578063ac18de431461091c578063ae18e0831461093b578063b2cdc6ff14610951578063b2e6ceeb14610967578063bd6c67e91461097d578063c5c4744c14610993578063ced3c6ad146109a6578063d6e0a37f146109bc578063e4b50cb8146109dc578063eb044b9714610a40578063f2fde38b14610a56578063fce3f6ac14610a75578063fea62cae14610afd575b600080fd5b341561023f57600080fd5b610247610b1f565b60405190815260200160405180910390f35b341561026457600080fd5b61026c610b2a565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156102a8578082015183820152602001610290565b50505050905090810190601f1680156102d55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156102ee57600080fd5b610305600160a060020a0360043516602435610b6b565b005b341561031257600080fd5b6102476004803563ffffffff16906024803562ffffff16919060649060443590810190830135806020601f82018190048102016040519081016040528181529291906020840183838082843750949650505092356cffffffffffffffffffffffffff169250610c5d915050565b341561038a57600080fd5b610247610d82565b341561039d57600080fd5b610247610d88565b34156103b057600080fd5b610305600435610d8e565b34156103c657600080fd5b6103d1600435610e5b565b604051600160a060020a03909116815260200160405180910390f35b34156103f857600080fd5b610305600160a060020a0360043516610e76565b341561041757600080fd5b610247600160a060020a0360043516610eb5565b341561043657600080fd5b610247600160a060020a0360043516610ed0565b341561045557600080fd5b610305610ee2565b341561046857600080fd5b6103d1610f09565b341561047b57600080fd5b610305600435610f18565b341561049157600080fd5b61049c600435611025565b604051600160a060020a03871681528315156060820152821515608082015281151560a082015260c060208201818152906040830190830188818151815260200191508051906020019080838360005b838110156105045780820151838201526020016104ec565b50505050905090810190601f1680156105315780820380516001836020036101000a031916815260200191505b50838103825287818151815260200191508051906020019080838360005b8381101561056757808201518382015260200161054f565b50505050905090810190601f1680156105945780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390f35b34156105b357600080fd5b6105c7600160a060020a03600435166111dd565b60405160208082528190810183818151815260200191508051906020019060200280838360005b838110156106065780820151838201526020016105ee565b505050509050019250505060405180910390f35b341561062557600080fd5b61062d611260565b604051901515815260200160405180910390f35b341561064c57600080fd5b61030567ffffffffffffffff60043516611269565b341561066c57600080fd5b6103d1600435611293565b341561068257600080fd5b610247600160a060020a03600435166112bd565b34156106a157600080fd5b6102476112d8565b34156106b457600080fd5b6106cc60043567ffffffffffffffff602435166112de565b60405185815262ffffff8086166020830152841660408201526080810182905260a06060820181815290820184818151815260200191508051906020019080838360005b83811015610728578082015183820152602001610710565b50505050905090810190601f1680156107555780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b341561077257600080fd5b6103056113fb565b341561078557600080fd5b6103d1611425565b341561079857600080fd5b610247600435611434565b34156107ae57600080fd5b610247600160a060020a0360043516602435611446565b34156107d057600080fd5b6103056004803590602480359162ffffff604435169160849060643590810190830135806020601f82018190048102016040519081016040528181529291906020840183838082843750949650509335935061147492505050565b341561083657600080fd5b61026c61156e565b341561084957600080fd5b61062d600160a060020a03600435166115af565b341561086857600080fd5b6103056115c4565b341561087b57600080fd5b6108896004356024356115ed565b6040518581526020810185905262ffffff80851660408301528316606082015260a060808201818152908201838181518152602001915080519060200190808383600083811015610728578082015183820152602001610710565b34156108ef57600080fd5b610305600160a060020a03600435166024356116e1565b341561091157600080fd5b610305600435611718565b341561092757600080fd5b610305600160a060020a0360043516611747565b341561094657600080fd5b610305600435611783565b341561095c57600080fd5b610305600435611850565b341561097257600080fd5b610305600435611a18565b341561098857600080fd5b610247600435611a43565b341561099e57600080fd5b610247611a55565b34156109b157600080fd5b6103d1600435611a5b565b6102476fffffffffffffffffffffffffffffffff60043516602435611a76565b34156109e757600080fd5b6109f2600435611bc4565b604051808681526020018581526020018462ffffff1662ffffff16815260200183600160a060020a0316600160a060020a031681526020018281526020019550505050505060405180910390f35b3415610a4b57600080fd5b610247600435611c37565b3415610a6157600080fd5b610305600160a060020a0360043516611c49565b61024760046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f016020809104026020016040519081016040528181529291906020840183838082843750949650611ce495505050505050565b3415610b0857600080fd5b610247600160a060020a0360043516602435611d5c565b600754600019015b90565b610b32612819565b60408051908101604052600881527f48657269746167650000000000000000000000000000000000000000000000006020820152919050565b60008133600160a060020a0316610b8182611293565b600160a060020a031614610b9457600080fd5b610b9d83611293565b9150600160a060020a038481169083161415610bb857600080fd5b610bc183610e5b565b600160a060020a0316151580610bdf5750600160a060020a03841615155b15610c575760008381526002602052604090819020805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0387811691821790925591908416907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259086905190815260200160405180910390a35b50505050565b601354600090819060ff1615610c7257600080fd5b600160a060020a03331660009081526012602052604090205460ff161515600114610c9c57600080fd5b63ffffffff86166000908152600a602052604090205433600160a060020a03908116911614610cca57600080fd5b600063ffffffff871611610cdd57600080fd5b600062ffffff861611610cef57600080fd5b6007805463ffffffff8816908110610d0357fe5b60009182526020909120600490910201600381015490915060ff1615610d2857600080fd5b6003810154610100900460ff1615610d3f57600080fd5b600381015462010000900460ff1615610d5757600080fd5b610d788663ffffffff168686866cffffffffffffffffffffffffff16611d94565b9695505050505050565b60105481565b60005490565b600160a060020a03331660009081526012602052604090205460ff161515600114610db857600080fd5b60008111610dc557600080fd5b6000818152600a602052604090205433600160a060020a03908116911614610dec57600080fd5b6001600782815481101515610dfd57fe5b906000526020600020906004020160030160026101000a81548160ff0219169083151502179055507f3f736ff1bf5c4bf87934f39f1b28f7991a787b08a0fcfffadb631c897fee35978160405190815260200160405180910390a150565b600090815260026020526040902054600160a060020a031690565b60055433600160a060020a03908116911614610e9157600080fd5b600160a060020a03166000908152601260205260409020805460ff19166001179055565b600160a060020a03166000908152600c602052604090205490565b600c6020526000908152604090205481565b60055433600160a060020a03908116911614610efd57600080fd5b6013805460ff19169055565b600654600160a060020a031681565b60055433600160a060020a03908116911614610f3357600080fd5b60008111610f4057600080fd5b6007805482908110610f4e57fe5b600091825260209091206003600490920201015460ff1615610f6f57600080fd5b6007805482908110610f7d57fe5b6000918252602090912060049091020160030154610100900460ff1615610fa357600080fd5b6000818152600e602052604081205411610fbc57600080fd5b6001600782815481101515610fcd57fe5b60009182526020909120600490910201600301805460ff19169115159190911790557f654d8eebe83f5c9a3d922533e6a30bcb25c11d78ce18b205a0bbc0a4391e1d008160405190815260200160405180910390a150565b600061102f612819565b611037612819565b60008060008060078881548110151561104c57fe5b906000526020600020906004020190508060000160009054906101000a9004600160a060020a03169650806001018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561110e5780601f106110e35761010080835404028352916020019161110e565b820191906000526020600020905b8154815290600101906020018083116110f157829003601f168201915b50505050509550806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111ad5780601f10611182576101008083540402835291602001916111ad565b820191906000526020600020905b81548152906001019060200180831161119057829003601f168201915b505050600390930154989a979950909760ff80821698610100830482169850620100009092041695509350505050565b6111e5612819565b6003600083600160a060020a0316600160a060020a0316815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561125457602002820191906000526020600020905b815481526020019060010190808311611240575b50505050509050919050565b60135460ff1681565b60055433600160a060020a0390811691161461128457600080fd5b67ffffffffffffffff16601055565b600081815260016020526040812054600160a060020a03168015156112b757600080fd5b92915050565b600160a060020a031660009081526003602052604090205490565b60095481565b60008060006112eb612819565b6000868152600e60205260408120805482919067ffffffffffffffff891690811061131257fe5b60009182526020918290206004909102018054600280830154600384018054939b5062ffffff8083169b50630100000090920490911698509294509192600019600183161561010002019091169190910490601f820181900481020160405190810160405280929190818152602001828054600181600116156101000203166002900480156113e25780601f106113b7576101008083540402835291602001916113e2565b820191906000526020600020905b8154815290600101906020018083116113c557829003601f168201915b5050505050925080600101549150509295509295909350565b60055433600160a060020a0390811691161461141657600080fd5b6013805460ff19166001179055565b600554600160a060020a031681565b600f6020526000908152604090205481565b600b6020528160005260406000208181548110151561146157fe5b6000918252602090912001549150829050565b60135460009060ff161561148757600080fd5b600160a060020a03331660009081526012602052604090205460ff1615156001146114b157600080fd5b6000868152600a602052604090205433600160a060020a039081169116146114d857600080fd5b600086116114e557600080fd5b600062ffffff8516116114f757600080fd5b600780548790811061150557fe5b60009182526020909120600490910201600381015490915060ff161561152a57600080fd5b6003810154610100900460ff161561154157600080fd5b600381015462010000900460ff161561155957600080fd5b6115668686868686611f2c565b505050505050565b611576612819565b60408051908101604052600381527f415e3300000000000000000000000000000000000000000000000000000000006020820152919050565b60126020526000908152604090205460ff1681565b60055433600160a060020a039081169116146115df57600080fd5b600554600160a060020a0316ff5b600e6020528160005260406000208181548110151561160857fe5b6000918252602091829020600490910201805460018083015460028085015460038601805495995092975062ffffff80821697630100000090920416959492936000199084161561010002019092160490601f820181900481020160405190810160405280929190818152602001828054600181600116156101000203166002900480156116d75780601f106116ac576101008083540402835291602001916116d7565b820191906000526020600020905b8154815290600101906020018083116116ba57829003601f168201915b5050505050905085565b8033600160a060020a03166116f582611293565b600160a060020a03161461170857600080fd5b611713338484612038565b505050565b60055433600160a060020a0390811691161461173357600080fd5b6103e881111561174257600080fd5b600955565b60055433600160a060020a0390811691161461176257600080fd5b600160a060020a03166000908152601260205260409020805460ff19169055565b600080821161179157600080fd5b6000828152600a602052604090205433600160a060020a039081169116146117b857600080fd5b6000828152600d6020526040812054116117d157600080fd5b506000818152600d60205260408082208054929055600160a060020a0333169082156108fc0290839051600060405180830381858888f19350505050151561181857600080fd5b817fccf4374900bd722270142f35dcf4fc2e2b5a3c60ab03daccfa8d4dce0dfe738a8260405190815260200160405180910390a25050565b600554600090819033600160a060020a0390811691161461187057600080fd5b6000831161187d57600080fd5b600780548490811061188b57fe5b600091825260208220600490910201805473ffffffffffffffffffffffffffffffffffffffff19168155906118c3600183018261282b565b6118d160028301600061282b565b50600301805462ffffff191690556007805460019190859081106118f157fe5b6000918252602090912060036004909202010180549115156101000261ff001990921691909117905560055460078054600160a060020a03909216918590811061193757fe5b60009182526020808320600492909202909101805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039490941693909317909255848152600e90915260408120925090505b81548110156119e057818181548110151561199e57fe5b6000918252602082206004909102018181556001810182905560028101805465ffffffffffff19169055906119d6600383018261282b565b5050600101611987565b7fa107a556b4445af6c76c3d1fb0861a3a6eba0a2d7cde2778425369de1d5a171b8360405190815260200160405180910390a1505050565b611a2233826120fe565b1515611a2d57600080fd5b611a40611a3982611293565b3383612038565b50565b600d6020526000908152604090205481565b60115481565b600a60205260009081526040902054600160a060020a031681565b60135460009081908190819060ff1615611a8f57600080fd5b600780546fffffffffffffffffffffffffffffffff8816908110611aaf57fe5b6000918252602090912060036004909202019081015490935060ff161515600114611ad957600080fd5b6003830154610100900460ff1615611af057600080fd5b6fffffffffffffffffffffffffffffffff86166000908152600e60205260409020805486908110611b1d57fe5b6000918252602082206004919091020160028101549093506301000000900462ffffff1611611b4b57600080fd5b600182015415611b655760018201543414611b6557600080fd5b5060028101546fffffffffffffffffffffffffffffffff86166000818152600d60205260409020805434908101909155601180548201905562ffffff63010000008404811693169290920360010191610d789190879084903390612124565b600080600080600080600887815481101515611bdc57fe5b60009182526020909120600490910201805460018201546002830154600390930154919a90995062ffffff740100000000000000000000000000000000000000008404169850600160a060020a039092169650945092505050565b6000908152600d602052604090205490565b60055433600160a060020a03908116911614611c6457600080fd5b600160a060020a0381161515611c7957600080fd5b600554600160a060020a0380831691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36005805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b601354600090819060ff1615611cf957600080fd5b600160a060020a03331660009081526012602052604090205460ff161515600114611d2357600080fd5b6010543414611d3157600080fd5b611d3c3385856122be565b6010546000828152600d6020526040902080549091019055949350505050565b600160a060020a0382166000908152600b60205260408120805483908110611d8057fe5b906000526020600020900154905092915050565b6000611d9e61286f565b600060a06040519081016040908152888252602080830187905262ffffff891682840181905260608401526080830188905260008a8152600e9091522080549193509060018101611def83826128ae565b600092835260209092208491600402018151815560208201518160010155604082015160028201805462ffffff191662ffffff9290921691909117905560608201518160020160036101000a81548162ffffff021916908362ffffff160217905550608082015181600301908051611e6b9291602001906128da565b5050506000888152600f6020526040908190208054600101905590915087907fbcc78462243df19ab0f6e9bff38bc47cc381cc4600d2e33e08232d5f78e0e8939087905160208082528190810183818151815260200191508051906020019080838360005b83811015611ee8578082015183820152602001611ed0565b50505050905090810190601f168015611f155780820380516001836020036101000a031916815260200191505b509250505060405180910390a29695505050505050565b6000858152600f60205260409020548410611f4357fe5b6000858152600e60205260409020805484919086908110611f6057fe5b906000526020600020906004020160020160006101000a81548162ffffff021916908362ffffff16021790555081600e600087815260200190815260200160002085815481101515611fae57fe5b9060005260206000209060040201600301908051611fd09291602001906128da565b506000858152600e60205260409020805482919086908110611fee57fe5b90600052602060002090600402016001018190555083857f786c7e740ad4b9cbb9643a5316ead4cfa380c3536634f463e35dd5e43bdc79d660405160405180910390a35050505050565b600160a060020a038216151561204d57600080fd5b61205681611293565b600160a060020a038381169116141561206e57600080fd5b82600160a060020a031661208182611293565b600160a060020a03161461209457600080fd5b61209e83826124c1565b6120a88382612553565b6120b282826126ca565b81600160a060020a031683600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405190815260200160405180910390a3505050565b600082600160a060020a031661211383610e5b565b600160a060020a0316149392505050565b600061212e612958565b600060a060405190810160409081528982526020808301879052600160a060020a0388168284015262ffffff89166060840152608083018a905260008b8152600e9091522080549193506001918990811061218557fe5b60009182526020909120600260049092020101805462ffffff6301000000808304821694909403169092027fffffffffffffffffffffffffffffffffffffffffffffffffffff000000ffffff90921691909117905560088054600181016121ec8382612986565b600092835260209092208491600402018151815560208201518160010155604082015160028201805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039290921691909117905560608201518160020160146101000a81548162ffffff021916908362ffffff160217905550608082015181600301555050905061227b858261278f565b84600160a060020a031687897f3ffd4886872bbfb79239c94b42e59f56b5e810f72259627f1af658ccc35bc8fb60405160405180910390a4979650505050505050565b60006122c86129b2565b600060c06040519081016040908152600160a060020a03881682526020820187905281018590526000606082018190526080820181905260a08201526007805491935060019180830161231b83826129f5565b600092835260209092208591600402018151815473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039190911617815560208201518160010190805161236f9291602001906128da565b5060408201518160020190805161238a9291602001906128da565b50606082015160038201805460ff191691151591909117905560808201516003820180549115156101000261ff001990921691909117905560a08201516003909101805491151562010000027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ffff90921691909117905550036000818152600a602090815260408083208054600160a060020a038c1673ffffffffffffffffffffffffffffffffffffffff1990911681179091558352600b90915290208054919250906001810161245a8382612a21565b506000918252602080832091909101839055600160a060020a038816808352600c9091526040918290208054600101905582917f8947cb78db2ffa53132a4e627ea0e20920cf6edd68b7b07989687e1a28e0bac7905160405180910390a395945050505050565b81600160a060020a03166124d482611293565b600160a060020a0316146124e757600080fd5b600081815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19169055600160a060020a038416907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259084905190815260200160405180910390a35050565b600080600084600160a060020a031661256b85611293565b600160a060020a03161461257e57600080fd5b60008481526004602052604090205492506125a9600161259d876112bd565b9063ffffffff6127f116565b600160a060020a0386166000908152600360205260409020805491935090839081106125d157fe5b6000918252602080832090910154868352600182526040808420805473ffffffffffffffffffffffffffffffffffffffff19169055600160a060020a038916845260039092529120805491925082918590811061262a57fe5b6000918252602080832090910192909255600160a060020a038716815260039091526040812080548490811061265c57fe5b6000918252602080832090910192909255600160a060020a0387168152600390915260409020805490612693906000198301612a21565b506000848152600460205260408082208290558282528120849055546126c090600163ffffffff6127f116565b6000555050505050565b600081815260016020526040812054600160a060020a0316156126ec57600080fd5b6000828152600160205260409020805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a038516179055612729836112bd565b600160a060020a0384166000908152600360205260409020805491925090600181016127558382612a21565b50600091825260208083209190910184905583825260049052604081208290555461278790600163ffffffff61280316565b600055505050565b600160a060020a03821615156127a457600080fd5b6127ae82826126ca565b81600160a060020a031660007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405190815260200160405180910390a35050565b6000828211156127fd57fe5b50900390565b60008282018381101561281257fe5b9392505050565b60206040519081016040526000815290565b50805460018160011615610100020316600290046000825580601f106128515750611a40565b601f016020900490600052602060002090810190611a409190612a41565b60a0604051908101604052806000815260200160008152602001600062ffffff168152602001600062ffffff1681526020016128a9612819565b905290565b815481835581811511611713576004028160040283600052602060002091820191016117139190612a5b565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061291b57805160ff1916838001178555612948565b82800160010185558215612948579182015b8281111561294857825182559160200191906001019061292d565b50612954929150612a41565b5090565b60a0604051908101604090815260008083526020830181905290820181905260608201819052608082015290565b815481835581811511611713576004028160040283600052602060002091820191016117139190612a9c565b60c060405190810160405260008152602081016129cd612819565b81526020016129da612819565b81526000602082018190526040820181905260609091015290565b815481835581811511611713576004028160040283600052602060002091820191016117139190612aed565b815481835581811511611713576000838152602090206117139181019083015b610b2791905b808211156129545760008155600101612a47565b610b2791905b808211156129545760008082556001820181905560028201805465ffffffffffff19169055612a93600383018261282b565b50600401612a61565b610b2791905b80821115612954576000808255600182018190556002820180547fffffffffffffffffff00000000000000000000000000000000000000000000001690556003820155600401612aa2565b610b2791905b8082111561295457805473ffffffffffffffffffffffffffffffffffffffff191681556000612b25600183018261282b565b612b3360028301600061282b565b5060038101805462ffffff19169055600401612af35600a165627a7a72305820c9ef8b6aece7558b5a33d4849c37d510f606af6d777e90c0e2903ab88045d2e00029",
  "deployedBytecode": "0x60606040526004361061022f5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166302932f56811461023457806306fdde0314610259578063095ea7b3146102e3578063135c442314610307578063173071341461037f57806318160ddd1461039257806319ad9577146103a55780632a6dd48f146103bb5780632d06177a146103ed5780632d85ea121461040c5780633da70bd51461042b5780633f4ba83a1461044a57806346bb28331461045d578063493f1726146104705780635598f8cc146104865780635a3f2672146105a85780635c975abb1461061a5780635cceb24b146106415780636352211e1461066157806370a08231146106775780637204ca151461069657806381cdb4c3146106a95780638456cb59146107675780638da5cb5b1461077a57806390722b751461078d57806391417542146107a3578063955202f8146107c557806395d89b411461082b5780639c0d9c3b1461083e5780639cb8a26a1461085d578063a5f8777514610870578063a9059cbb146108e4578063a9cd4a1f14610906578063ac18de431461091c578063ae18e0831461093b578063b2cdc6ff14610951578063b2e6ceeb14610967578063bd6c67e91461097d578063c5c4744c14610993578063ced3c6ad146109a6578063d6e0a37f146109bc578063e4b50cb8146109dc578063eb044b9714610a40578063f2fde38b14610a56578063fce3f6ac14610a75578063fea62cae14610afd575b600080fd5b341561023f57600080fd5b610247610b1f565b60405190815260200160405180910390f35b341561026457600080fd5b61026c610b2a565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156102a8578082015183820152602001610290565b50505050905090810190601f1680156102d55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156102ee57600080fd5b610305600160a060020a0360043516602435610b6b565b005b341561031257600080fd5b6102476004803563ffffffff16906024803562ffffff16919060649060443590810190830135806020601f82018190048102016040519081016040528181529291906020840183838082843750949650505092356cffffffffffffffffffffffffff169250610c5d915050565b341561038a57600080fd5b610247610d82565b341561039d57600080fd5b610247610d88565b34156103b057600080fd5b610305600435610d8e565b34156103c657600080fd5b6103d1600435610e5b565b604051600160a060020a03909116815260200160405180910390f35b34156103f857600080fd5b610305600160a060020a0360043516610e76565b341561041757600080fd5b610247600160a060020a0360043516610eb5565b341561043657600080fd5b610247600160a060020a0360043516610ed0565b341561045557600080fd5b610305610ee2565b341561046857600080fd5b6103d1610f09565b341561047b57600080fd5b610305600435610f18565b341561049157600080fd5b61049c600435611025565b604051600160a060020a03871681528315156060820152821515608082015281151560a082015260c060208201818152906040830190830188818151815260200191508051906020019080838360005b838110156105045780820151838201526020016104ec565b50505050905090810190601f1680156105315780820380516001836020036101000a031916815260200191505b50838103825287818151815260200191508051906020019080838360005b8381101561056757808201518382015260200161054f565b50505050905090810190601f1680156105945780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390f35b34156105b357600080fd5b6105c7600160a060020a03600435166111dd565b60405160208082528190810183818151815260200191508051906020019060200280838360005b838110156106065780820151838201526020016105ee565b505050509050019250505060405180910390f35b341561062557600080fd5b61062d611260565b604051901515815260200160405180910390f35b341561064c57600080fd5b61030567ffffffffffffffff60043516611269565b341561066c57600080fd5b6103d1600435611293565b341561068257600080fd5b610247600160a060020a03600435166112bd565b34156106a157600080fd5b6102476112d8565b34156106b457600080fd5b6106cc60043567ffffffffffffffff602435166112de565b60405185815262ffffff8086166020830152841660408201526080810182905260a06060820181815290820184818151815260200191508051906020019080838360005b83811015610728578082015183820152602001610710565b50505050905090810190601f1680156107555780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b341561077257600080fd5b6103056113fb565b341561078557600080fd5b6103d1611425565b341561079857600080fd5b610247600435611434565b34156107ae57600080fd5b610247600160a060020a0360043516602435611446565b34156107d057600080fd5b6103056004803590602480359162ffffff604435169160849060643590810190830135806020601f82018190048102016040519081016040528181529291906020840183838082843750949650509335935061147492505050565b341561083657600080fd5b61026c61156e565b341561084957600080fd5b61062d600160a060020a03600435166115af565b341561086857600080fd5b6103056115c4565b341561087b57600080fd5b6108896004356024356115ed565b6040518581526020810185905262ffffff80851660408301528316606082015260a060808201818152908201838181518152602001915080519060200190808383600083811015610728578082015183820152602001610710565b34156108ef57600080fd5b610305600160a060020a03600435166024356116e1565b341561091157600080fd5b610305600435611718565b341561092757600080fd5b610305600160a060020a0360043516611747565b341561094657600080fd5b610305600435611783565b341561095c57600080fd5b610305600435611850565b341561097257600080fd5b610305600435611a18565b341561098857600080fd5b610247600435611a43565b341561099e57600080fd5b610247611a55565b34156109b157600080fd5b6103d1600435611a5b565b6102476fffffffffffffffffffffffffffffffff60043516602435611a76565b34156109e757600080fd5b6109f2600435611bc4565b604051808681526020018581526020018462ffffff1662ffffff16815260200183600160a060020a0316600160a060020a031681526020018281526020019550505050505060405180910390f35b3415610a4b57600080fd5b610247600435611c37565b3415610a6157600080fd5b610305600160a060020a0360043516611c49565b61024760046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f016020809104026020016040519081016040528181529291906020840183838082843750949650611ce495505050505050565b3415610b0857600080fd5b610247600160a060020a0360043516602435611d5c565b600754600019015b90565b610b32612819565b60408051908101604052600881527f48657269746167650000000000000000000000000000000000000000000000006020820152919050565b60008133600160a060020a0316610b8182611293565b600160a060020a031614610b9457600080fd5b610b9d83611293565b9150600160a060020a038481169083161415610bb857600080fd5b610bc183610e5b565b600160a060020a0316151580610bdf5750600160a060020a03841615155b15610c575760008381526002602052604090819020805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0387811691821790925591908416907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259086905190815260200160405180910390a35b50505050565b601354600090819060ff1615610c7257600080fd5b600160a060020a03331660009081526012602052604090205460ff161515600114610c9c57600080fd5b63ffffffff86166000908152600a602052604090205433600160a060020a03908116911614610cca57600080fd5b600063ffffffff871611610cdd57600080fd5b600062ffffff861611610cef57600080fd5b6007805463ffffffff8816908110610d0357fe5b60009182526020909120600490910201600381015490915060ff1615610d2857600080fd5b6003810154610100900460ff1615610d3f57600080fd5b600381015462010000900460ff1615610d5757600080fd5b610d788663ffffffff168686866cffffffffffffffffffffffffff16611d94565b9695505050505050565b60105481565b60005490565b600160a060020a03331660009081526012602052604090205460ff161515600114610db857600080fd5b60008111610dc557600080fd5b6000818152600a602052604090205433600160a060020a03908116911614610dec57600080fd5b6001600782815481101515610dfd57fe5b906000526020600020906004020160030160026101000a81548160ff0219169083151502179055507f3f736ff1bf5c4bf87934f39f1b28f7991a787b08a0fcfffadb631c897fee35978160405190815260200160405180910390a150565b600090815260026020526040902054600160a060020a031690565b60055433600160a060020a03908116911614610e9157600080fd5b600160a060020a03166000908152601260205260409020805460ff19166001179055565b600160a060020a03166000908152600c602052604090205490565b600c6020526000908152604090205481565b60055433600160a060020a03908116911614610efd57600080fd5b6013805460ff19169055565b600654600160a060020a031681565b60055433600160a060020a03908116911614610f3357600080fd5b60008111610f4057600080fd5b6007805482908110610f4e57fe5b600091825260209091206003600490920201015460ff1615610f6f57600080fd5b6007805482908110610f7d57fe5b6000918252602090912060049091020160030154610100900460ff1615610fa357600080fd5b6000818152600e602052604081205411610fbc57600080fd5b6001600782815481101515610fcd57fe5b60009182526020909120600490910201600301805460ff19169115159190911790557f654d8eebe83f5c9a3d922533e6a30bcb25c11d78ce18b205a0bbc0a4391e1d008160405190815260200160405180910390a150565b600061102f612819565b611037612819565b60008060008060078881548110151561104c57fe5b906000526020600020906004020190508060000160009054906101000a9004600160a060020a03169650806001018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561110e5780601f106110e35761010080835404028352916020019161110e565b820191906000526020600020905b8154815290600101906020018083116110f157829003601f168201915b50505050509550806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111ad5780601f10611182576101008083540402835291602001916111ad565b820191906000526020600020905b81548152906001019060200180831161119057829003601f168201915b505050600390930154989a979950909760ff80821698610100830482169850620100009092041695509350505050565b6111e5612819565b6003600083600160a060020a0316600160a060020a0316815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561125457602002820191906000526020600020905b815481526020019060010190808311611240575b50505050509050919050565b60135460ff1681565b60055433600160a060020a0390811691161461128457600080fd5b67ffffffffffffffff16601055565b600081815260016020526040812054600160a060020a03168015156112b757600080fd5b92915050565b600160a060020a031660009081526003602052604090205490565b60095481565b60008060006112eb612819565b6000868152600e60205260408120805482919067ffffffffffffffff891690811061131257fe5b60009182526020918290206004909102018054600280830154600384018054939b5062ffffff8083169b50630100000090920490911698509294509192600019600183161561010002019091169190910490601f820181900481020160405190810160405280929190818152602001828054600181600116156101000203166002900480156113e25780601f106113b7576101008083540402835291602001916113e2565b820191906000526020600020905b8154815290600101906020018083116113c557829003601f168201915b5050505050925080600101549150509295509295909350565b60055433600160a060020a0390811691161461141657600080fd5b6013805460ff19166001179055565b600554600160a060020a031681565b600f6020526000908152604090205481565b600b6020528160005260406000208181548110151561146157fe5b6000918252602090912001549150829050565b60135460009060ff161561148757600080fd5b600160a060020a03331660009081526012602052604090205460ff1615156001146114b157600080fd5b6000868152600a602052604090205433600160a060020a039081169116146114d857600080fd5b600086116114e557600080fd5b600062ffffff8516116114f757600080fd5b600780548790811061150557fe5b60009182526020909120600490910201600381015490915060ff161561152a57600080fd5b6003810154610100900460ff161561154157600080fd5b600381015462010000900460ff161561155957600080fd5b6115668686868686611f2c565b505050505050565b611576612819565b60408051908101604052600381527f415e3300000000000000000000000000000000000000000000000000000000006020820152919050565b60126020526000908152604090205460ff1681565b60055433600160a060020a039081169116146115df57600080fd5b600554600160a060020a0316ff5b600e6020528160005260406000208181548110151561160857fe5b6000918252602091829020600490910201805460018083015460028085015460038601805495995092975062ffffff80821697630100000090920416959492936000199084161561010002019092160490601f820181900481020160405190810160405280929190818152602001828054600181600116156101000203166002900480156116d75780601f106116ac576101008083540402835291602001916116d7565b820191906000526020600020905b8154815290600101906020018083116116ba57829003601f168201915b5050505050905085565b8033600160a060020a03166116f582611293565b600160a060020a03161461170857600080fd5b611713338484612038565b505050565b60055433600160a060020a0390811691161461173357600080fd5b6103e881111561174257600080fd5b600955565b60055433600160a060020a0390811691161461176257600080fd5b600160a060020a03166000908152601260205260409020805460ff19169055565b600080821161179157600080fd5b6000828152600a602052604090205433600160a060020a039081169116146117b857600080fd5b6000828152600d6020526040812054116117d157600080fd5b506000818152600d60205260408082208054929055600160a060020a0333169082156108fc0290839051600060405180830381858888f19350505050151561181857600080fd5b817fccf4374900bd722270142f35dcf4fc2e2b5a3c60ab03daccfa8d4dce0dfe738a8260405190815260200160405180910390a25050565b600554600090819033600160a060020a0390811691161461187057600080fd5b6000831161187d57600080fd5b600780548490811061188b57fe5b600091825260208220600490910201805473ffffffffffffffffffffffffffffffffffffffff19168155906118c3600183018261282b565b6118d160028301600061282b565b50600301805462ffffff191690556007805460019190859081106118f157fe5b6000918252602090912060036004909202010180549115156101000261ff001990921691909117905560055460078054600160a060020a03909216918590811061193757fe5b60009182526020808320600492909202909101805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039490941693909317909255848152600e90915260408120925090505b81548110156119e057818181548110151561199e57fe5b6000918252602082206004909102018181556001810182905560028101805465ffffffffffff19169055906119d6600383018261282b565b5050600101611987565b7fa107a556b4445af6c76c3d1fb0861a3a6eba0a2d7cde2778425369de1d5a171b8360405190815260200160405180910390a1505050565b611a2233826120fe565b1515611a2d57600080fd5b611a40611a3982611293565b3383612038565b50565b600d6020526000908152604090205481565b60115481565b600a60205260009081526040902054600160a060020a031681565b60135460009081908190819060ff1615611a8f57600080fd5b600780546fffffffffffffffffffffffffffffffff8816908110611aaf57fe5b6000918252602090912060036004909202019081015490935060ff161515600114611ad957600080fd5b6003830154610100900460ff1615611af057600080fd5b6fffffffffffffffffffffffffffffffff86166000908152600e60205260409020805486908110611b1d57fe5b6000918252602082206004919091020160028101549093506301000000900462ffffff1611611b4b57600080fd5b600182015415611b655760018201543414611b6557600080fd5b5060028101546fffffffffffffffffffffffffffffffff86166000818152600d60205260409020805434908101909155601180548201905562ffffff63010000008404811693169290920360010191610d789190879084903390612124565b600080600080600080600887815481101515611bdc57fe5b60009182526020909120600490910201805460018201546002830154600390930154919a90995062ffffff740100000000000000000000000000000000000000008404169850600160a060020a039092169650945092505050565b6000908152600d602052604090205490565b60055433600160a060020a03908116911614611c6457600080fd5b600160a060020a0381161515611c7957600080fd5b600554600160a060020a0380831691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36005805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b601354600090819060ff1615611cf957600080fd5b600160a060020a03331660009081526012602052604090205460ff161515600114611d2357600080fd5b6010543414611d3157600080fd5b611d3c3385856122be565b6010546000828152600d6020526040902080549091019055949350505050565b600160a060020a0382166000908152600b60205260408120805483908110611d8057fe5b906000526020600020900154905092915050565b6000611d9e61286f565b600060a06040519081016040908152888252602080830187905262ffffff891682840181905260608401526080830188905260008a8152600e9091522080549193509060018101611def83826128ae565b600092835260209092208491600402018151815560208201518160010155604082015160028201805462ffffff191662ffffff9290921691909117905560608201518160020160036101000a81548162ffffff021916908362ffffff160217905550608082015181600301908051611e6b9291602001906128da565b5050506000888152600f6020526040908190208054600101905590915087907fbcc78462243df19ab0f6e9bff38bc47cc381cc4600d2e33e08232d5f78e0e8939087905160208082528190810183818151815260200191508051906020019080838360005b83811015611ee8578082015183820152602001611ed0565b50505050905090810190601f168015611f155780820380516001836020036101000a031916815260200191505b509250505060405180910390a29695505050505050565b6000858152600f60205260409020548410611f4357fe5b6000858152600e60205260409020805484919086908110611f6057fe5b906000526020600020906004020160020160006101000a81548162ffffff021916908362ffffff16021790555081600e600087815260200190815260200160002085815481101515611fae57fe5b9060005260206000209060040201600301908051611fd09291602001906128da565b506000858152600e60205260409020805482919086908110611fee57fe5b90600052602060002090600402016001018190555083857f786c7e740ad4b9cbb9643a5316ead4cfa380c3536634f463e35dd5e43bdc79d660405160405180910390a35050505050565b600160a060020a038216151561204d57600080fd5b61205681611293565b600160a060020a038381169116141561206e57600080fd5b82600160a060020a031661208182611293565b600160a060020a03161461209457600080fd5b61209e83826124c1565b6120a88382612553565b6120b282826126ca565b81600160a060020a031683600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405190815260200160405180910390a3505050565b600082600160a060020a031661211383610e5b565b600160a060020a0316149392505050565b600061212e612958565b600060a060405190810160409081528982526020808301879052600160a060020a0388168284015262ffffff89166060840152608083018a905260008b8152600e9091522080549193506001918990811061218557fe5b60009182526020909120600260049092020101805462ffffff6301000000808304821694909403169092027fffffffffffffffffffffffffffffffffffffffffffffffffffff000000ffffff90921691909117905560088054600181016121ec8382612986565b600092835260209092208491600402018151815560208201518160010155604082015160028201805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039290921691909117905560608201518160020160146101000a81548162ffffff021916908362ffffff160217905550608082015181600301555050905061227b858261278f565b84600160a060020a031687897f3ffd4886872bbfb79239c94b42e59f56b5e810f72259627f1af658ccc35bc8fb60405160405180910390a4979650505050505050565b60006122c86129b2565b600060c06040519081016040908152600160a060020a03881682526020820187905281018590526000606082018190526080820181905260a08201526007805491935060019180830161231b83826129f5565b600092835260209092208591600402018151815473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039190911617815560208201518160010190805161236f9291602001906128da565b5060408201518160020190805161238a9291602001906128da565b50606082015160038201805460ff191691151591909117905560808201516003820180549115156101000261ff001990921691909117905560a08201516003909101805491151562010000027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ffff90921691909117905550036000818152600a602090815260408083208054600160a060020a038c1673ffffffffffffffffffffffffffffffffffffffff1990911681179091558352600b90915290208054919250906001810161245a8382612a21565b506000918252602080832091909101839055600160a060020a038816808352600c9091526040918290208054600101905582917f8947cb78db2ffa53132a4e627ea0e20920cf6edd68b7b07989687e1a28e0bac7905160405180910390a395945050505050565b81600160a060020a03166124d482611293565b600160a060020a0316146124e757600080fd5b600081815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19169055600160a060020a038416907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259084905190815260200160405180910390a35050565b600080600084600160a060020a031661256b85611293565b600160a060020a03161461257e57600080fd5b60008481526004602052604090205492506125a9600161259d876112bd565b9063ffffffff6127f116565b600160a060020a0386166000908152600360205260409020805491935090839081106125d157fe5b6000918252602080832090910154868352600182526040808420805473ffffffffffffffffffffffffffffffffffffffff19169055600160a060020a038916845260039092529120805491925082918590811061262a57fe5b6000918252602080832090910192909255600160a060020a038716815260039091526040812080548490811061265c57fe5b6000918252602080832090910192909255600160a060020a0387168152600390915260409020805490612693906000198301612a21565b506000848152600460205260408082208290558282528120849055546126c090600163ffffffff6127f116565b6000555050505050565b600081815260016020526040812054600160a060020a0316156126ec57600080fd5b6000828152600160205260409020805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a038516179055612729836112bd565b600160a060020a0384166000908152600360205260409020805491925090600181016127558382612a21565b50600091825260208083209190910184905583825260049052604081208290555461278790600163ffffffff61280316565b600055505050565b600160a060020a03821615156127a457600080fd5b6127ae82826126ca565b81600160a060020a031660007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405190815260200160405180910390a35050565b6000828211156127fd57fe5b50900390565b60008282018381101561281257fe5b9392505050565b60206040519081016040526000815290565b50805460018160011615610100020316600290046000825580601f106128515750611a40565b601f016020900490600052602060002090810190611a409190612a41565b60a0604051908101604052806000815260200160008152602001600062ffffff168152602001600062ffffff1681526020016128a9612819565b905290565b815481835581811511611713576004028160040283600052602060002091820191016117139190612a5b565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061291b57805160ff1916838001178555612948565b82800160010185558215612948579182015b8281111561294857825182559160200191906001019061292d565b50612954929150612a41565b5090565b60a0604051908101604090815260008083526020830181905290820181905260608201819052608082015290565b815481835581811511611713576004028160040283600052602060002091820191016117139190612a9c565b60c060405190810160405260008152602081016129cd612819565b81526020016129da612819565b81526000602082018190526040820181905260609091015290565b815481835581811511611713576004028160040283600052602060002091820191016117139190612aed565b815481835581811511611713576000838152602090206117139181019083015b610b2791905b808211156129545760008155600101612a47565b610b2791905b808211156129545760008082556001820181905560028201805465ffffffffffff19169055612a93600383018261282b565b50600401612a61565b610b2791905b80821115612954576000808255600182018190556002820180547fffffffffffffffffff00000000000000000000000000000000000000000000001690556003820155600401612aa2565b610b2791905b8082111561295457805473ffffffffffffffffffffffffffffffffffffffff191681556000612b25600183018261282b565b612b3360028301600061282b565b5060038101805462ffffff19169055600401612af35600a165627a7a72305820c9ef8b6aece7558b5a33d4849c37d510f606af6d777e90c0e2903ab88045d2e00029",
  "sourceMap": "53:288:0:-;;;359:3:3;326:36;;125:1:2;87:39;;;;186:30;;341:26;;;-1:-1:-1;;341:26:2;;;81:258:0;;;;;;;;501:5:5;:18;;-1:-1:-1;;;;;509:10:5;501:18;;;-1:-1:-1;;;;;;501:18:5;;;;;;;;110:14:0;:27;;;;;;;;;;501:5:5;143:28:0;;;:16;:28;;;;;;;:35;;-1:-1:-1;;143:35:0;501:18:5;143:35:0;;;185:51;;143:28;185:51;;;;;;;;;;;;;;;;;;;;;;;;;;;:15;;;;;;:51;:::i;:::-;;242:50;261:1;264;242:50;;;;;;;;;;;;;;;;-1:-1:-1;242:18:0;;;;;;:50;:::i;:::-;-1:-1:-1;298:36:0;311:1;;;320:10;311:1;298:12;;;;;;:36;:::i;:::-;;53:288;;2805:607:3;2925:7;2942:25;;:::i;:::-;3130:21;2970:153;;;;;;;;;;-1:-1:-1;;;;;2970:153:3;;;;;;;;;;;;;;;-1:-1:-1;2970:153:3;;;;;;;;;;;;;;;;3154:9;:25;;2970:153;;-1:-1:-1;2970:153:3;;3154:25;;;;:9;:25;;:::i;:::-;;;;;;;;;3169:9;;3154:25;;;3169:9;3154:25;;;-1:-1:-1;;;;;;3154:25:3;-1:-1:-1;;;;;3154:25:3;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;-1:-1:-1;;3154:25:3;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3154:25:3;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3154:25:3;;;;;;;;;-1:-1:-1;3154:29:3;-1:-1:-1;3190:35:3;;;:20;:35;;;;;;;;:44;;-1:-1:-1;;;;;3190:44:3;;-1:-1:-1;;;;;;3190:44:3;;;;;;;;3240:30;;:22;:30;;;;;:50;;3154:29;;-1:-1:-1;3240:30:3;-1:-1:-1;3240:50:3;;;:30;:50;;:::i;:::-;-1:-1:-1;3240:50:3;;;;;;;;;;;;;;;-1:-1:-1;;;;;3296:35:3;;;;;:27;:35;;;;;;;;:40;;3335:1;3296:40;;;3276:13;;3343:37;;;;;;;;;;3394:13;2805:607;-1:-1:-1;;;;;2805:607:3:o;3464:546::-;3605:7;3623:31;;:::i;:::-;3803:24;3657:139;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3830:33:3;;;:20;:33;;;;:52;;3657:139;;-1:-1:-1;3830:33:3;:52;;;;:33;:52;;:::i;:::-;;;;;;;;;3869:12;;3830:52;;;3869:12;3830:52;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3830:52:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;3889:37:3;;;;:24;:37;;;;;;;:42;;3930:1;3889:42;;;3803:79;;-1:-1:-1;3914:11:3;;3938:37;;3969:5;;3938:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;3938:37:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3989:16;3464:546;-1:-1:-1;;;;;;3464:546:3:o;2169:605::-;2339:7;2356:19;;:::i;:::-;2617:18;2378:160;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2378:160:3;;;;;;;;;;;;;;;;;;;-1:-1:-1;2545:33:3;;;:20;:33;;;;:50;;2378:160;;-1:-1:-1;2609:1:3;;2485:15;;2545:50;;;;;;;;;;;;;;:60;:50;;;;;:60;:65;;;;;;;;;;;;;;;;;-1:-1:-1;;2545:65:3;;;;;;;;;2638:6;:19;;-1:-1:-1;2638:19:3;;;:6;:19;;:::i;:::-;;;;;;;;;2650:6;;2638:19;;;2650:6;2638:19;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;2638:19:3;-1:-1:-1;;;;;2638:19:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2617:40:3;-1:-1:-1;2664:25:3;2670:6;2617:40;2664:5;;;;;;:25;:::i;:::-;2738:6;-1:-1:-1;;;;;2696:49:3;2721:15;2708:11;2696:49;;;;;;;;;;2759:10;2169:605;-1:-1:-1;;;;;;;2169:605:3:o;3892:155:7:-;-1:-1:-1;;;;;3961:17:7;;;;3953:26;;;;;;3985:23;3994:3;3999:8;3985;;;;;;:23;:::i;:::-;4028:3;-1:-1:-1;;;;;4014:28:7;4023:3;4014:28;4033:8;4014:28;;;;;;;;;;;;;;3892:155;;:::o;6197:296::-;6341:14;6268:20;;;:10;:20;;;;;;-1:-1:-1;;;;;6268:20:7;:34;6260:43;;;;;;6309:20;;;;:10;:20;;;;;:26;;-1:-1:-1;;;;;;6309:26:7;-1:-1:-1;;;;;6309:26:7;;;;;6358:14;6309:26;6358:9;;;;;;:14;:::i;:::-;-1:-1:-1;;;;;6378:16:7;;;;;;:11;:16;;;;;:31;;6341;;-1:-1:-1;6378:16:7;:31;;;;:16;:31;;:::i;:::-;-1:-1:-1;6378:31:7;;;;;;;;;;;;;;;6415:26;;;:16;:26;;;;;:35;;;6470:11;:18;;6486:1;6470:15;;;;;;:18;:::i;:::-;6456:11;:32;-1:-1:-1;;;6197:296:7:o;1403:109::-;-1:-1:-1;;;;;1481:19:7;1459:7;1481:19;;;:11;:19;;;;;:26;;1403:109::o;1008:129:4:-;1066:7;1093:5;;;1111:6;;;;1104:14;;;;1131:1;1008:129;-1:-1:-1;;;1008:129:4:o;53:288:0:-;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;53:288:0;;;-1:-1:-1;53:288:0;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;-1:-1:-1;;;;;;53:288:0;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;-1:-1:-1;53:288:0;;;;;-1:-1:-1;;53:288:0;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;53:288:0;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;53:288:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "53:288:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6971:94:3;;;;;;;;;;;;;;;;;;;;;;;;;;;128:82:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;128:82:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3120:280:7;;;;;;;;;;-1:-1:-1;;;;;3120:280:7;;;;;;;;;1368:540:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1368:540:2;;-1:-1:-1;;;1368:540:2;;;;;-1:-1:-1;1368:540:2;;-1:-1:-1;;1368:540:2;87:39;;;;;;;;;;;;1133:82:7;;;;;;;;;;;;3578:235:2;;;;;;;;;;;;;;2432:111:7;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2432:111:7;;;;;;;;;;;;;;5024:97:2;;;;;;;;;;-1:-1:-1;;;;;5024:97:2;;;;;6628:160:3;;;;;;;;;;-1:-1:-1;;;;;6628:160:3;;;;;646:69;;;;;;;;;;-1:-1:-1;;;;;646:69:3;;;;;4959:61:2;;;;;;;;;;;;152:29:3;;;;;;;;;;;;3862:341:2;;;;;;;;;;;;;;5239:419:3;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;5239:419:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;5239:419:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;5239:419:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1716:103:7;;;;;;;;;;-1:-1:-1;;;;;1716:103:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;1716:103:7;;;;;;;;;;;;;;;;;341:26:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4763:130;;;;;;;;;;;;;;;;2028:164:7;;;;;;;;;;;;;;1403:109;;;;;;;;;;-1:-1:-1;;;;;1403:109:7;;;;;326:36:3;;;;;;;;;;;;5662:512;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;5662:512:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4897:58:2;;;;;;;;;;;;238:20:5;;;;;;;;;;;;969:67:3;;;;;;;;;;;;;;536:64;;;;;;;;;;-1:-1:-1;;;;;536:64:3;;;;;;;2013:569:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2013:569:2;;-1:-1:-1;;2013:569:2;;;-1:-1:-1;2013:569:2;;-1:-1:-1;;;2013:569:2;214:83:1;;;;;;;;;;;;268:48:2;;;;;;;;;;-1:-1:-1;;;;;268:48:2;;;;;5291:71;;;;;;;;;;;;853:62:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;71:11;;;64:39;52:2;45:10;8:100;;2762:140:7;;;;;;;;;;-1:-1:-1;;;;;2762:140:7;;;;;;;5066:158:3;;;;;;;;;;;;;;5125:101:2;;;;;;;;;;-1:-1:-1;;;;;5125:101:2;;;;;4622:376:3;;;;;;;;;;;;;;4278:413:2;;;;;;;;;;;;;;3541:174:7;;;;;;;;;;;;;;751:57:3;;;;;;;;;;;;;;186:30:2;;;;;;;;;;;;432:62:3;;;;;;;;;;;;;;2702:810:2;;;;;;;;;;6178:446:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;6178:446:3;-1:-1:-1;;;;;6178:446:3;;;;;;;;;;;;;;;;;;;;;;;;7069:125;;;;;;;;;;;;;;832:169:5;;;;;;;;;;-1:-1:-1;;;;;832:169:5;;;;;891:363:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;891:363:2;;-1:-1:-1;891:363:2;;-1:-1:-1;;;;;;891:363:2;6792:175:3;;;;;;;;;;-1:-1:-1;;;;;6792:175:3;;;;;;;6971:94;7040:9;:16;-1:-1:-1;;7040:20:3;6971:94;;:::o;128:82:1:-;167:12;;:::i;:::-;187:18;;;;;;;;;;;;;;;;;128:82;-1:-1:-1;128:82:1:o;3120:280:7:-;3203:13;3187:8;971:10;-1:-1:-1;;;;;950:31:7;:17;958:8;950:7;:17::i;:::-;-1:-1:-1;;;;;950:31:7;;942:40;;;;;;3219:17;3227:8;3219:7;:17::i;:::-;3203:33;-1:-1:-1;;;;;;3250:12:7;;;;;;;;3242:21;;;;;;3273;3285:8;3273:11;:21::i;:::-;-1:-1:-1;;;;;3273:26:7;;;;:38;;-1:-1:-1;;;;;;3303:8:7;;;;3273:38;3269:127;;;3321:24;;;;:14;:24;;;;;;;:30;;-1:-1:-1;;3321:30:7;-1:-1:-1;;;;;3321:30:7;;;;;;;;;;3359;;;;;;3321:24;;3359:30;;;;;;;;;;;;;3269:127;3120:280;;;;:::o;1368:540:2:-;707:6;;1533:7;;;;707:6;;:15;699:24;;;;;;-1:-1:-1;;;;;793:10:2;776:28;;;;;:16;:28;;;;;;;;:36;;:28;:36;768:45;;;;;;1558:33;;;;;;;:20;:33;;;;;;1595:10;-1:-1:-1;;;;;1558:47:2;;;:33;;:47;1550:56;;;;;;1634:1;1620:15;;;;1612:24;;;;;;1660:1;1650:11;;;;1642:20;;;;;;1697:9;:22;;;;;;;;;;;;;;;;;;;;;;;;;1734:15;;;;1697:22;;-1:-1:-1;1734:15:2;;:24;1726:33;;;;;;1773:13;;;;;;;;;:22;1765:31;;;;;;1810:14;;;;;;;;;:23;1802:32;;;;;;1848:55;1867:11;1848:55;;1880:7;1889:5;1896:6;1848:55;;:18;:55::i;:::-;1841:62;1368:540;-1:-1:-1;;;;;;1368:540:2:o;87:39::-;;;;:::o;1133:82:7:-;1177:7;1199:11;1133:82;:::o;3578:235:2:-;-1:-1:-1;;;;;793:10:2;776:28;;;;;:16;:28;;;;;;;;:36;;:28;:36;768:45;;;;;;3669:1;3655:15;;3647:24;;;;;;3685:33;;;;:20;:33;;;;;;3722:10;-1:-1:-1;;;;;3685:47:2;;;:33;;:47;3677:56;;;;;;3771:4;3740:9;3750:11;3740:22;;;;;;;;;;;;;;;;;;;;:28;;;:35;;;;;;;;;;;;;;;;;;3782:26;3796:11;3782:26;;;;;;;;;;;;;;3578:235;:::o;2432:111:7:-;2492:7;2514:24;;;:14;:24;;;;;;-1:-1:-1;;;;;2514:24:7;;2432:111::o;5024:97:2:-;653:5:5;;639:10;-1:-1:-1;;;;;639:19:5;;;653:5;;639:19;631:28;;;;;;-1:-1:-1;;;;;5084:25:2;;;;;:16;:25;;;;;:32;;-1:-1:-1;;5084:32:2;5112:4;5084:32;;;5024:97::o;6628:160:3:-;-1:-1:-1;;;;;6748:35:3;6717:13;6748:35;;;:27;:35;;;;;;;6628:160::o;646:69::-;;;;;;;;;;;;;:::o;4959:61:2:-;653:5:5;;639:10;-1:-1:-1;;;;;639:19:5;;;653:5;;639:19;631:28;;;;;;5001:6:2;:14;;-1:-1:-1;;5001:14:2;;;4959:61::o;152:29:3:-;;;-1:-1:-1;;;;;152:29:3;;:::o;3862:341:2:-;653:5:5;;639:10;-1:-1:-1;;;;;639:19:5;;;653:5;;639:19;631:28;;;;;;3954:1:2;3940:15;;3932:24;;;;;;3970:9;:22;;3980:11;;3970:22;;;;;;;;;;;;;;:29;:22;;;;;:29;;;;:38;3962:47;;;;;;4023:9;:22;;4033:11;;4023:22;;;;;;;;;;;;;;;;;;;:27;;;;;;;;:36;4015:45;;;;;;4117:1;4074:33;;;:20;:33;;;;;:40;:44;4066:53;;;;;;4158:4;4126:9;4136:11;4126:22;;;;;;;;;;;;;;;;;;;;;;;:29;;:36;;-1:-1:-1;;4126:36:2;;;;;;;;;;4169:29;4186:11;4169:29;;;;;;;;;;;;;;3862:341;:::o;5239:419:3:-;5313:13;5332:19;;:::i;:::-;5357:12;;:::i;:::-;5375:11;5392:9;5407:10;5428:25;5456:9;5466:3;5456:14;;;;;;;;;;;;;;;;;;;;5428:42;;5485:8;:14;;;;;;;;;;-1:-1:-1;;;;;5485:14:3;5477:22;;5520:8;:21;;5505:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5555:8;:14;;5547:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;5584:15:3;;;;;5239:419;;;;-1:-1:-1;5547:22:3;;5584:15;;;;;;5612:13;;;;;-1:-1:-1;5639:14:3;;;;;;-1:-1:-1;5239:419:3;-1:-1:-1;;;;5239:419:3:o;1716:103:7:-;1771:9;;:::i;:::-;1795:11;:19;1807:6;-1:-1:-1;;;;;1795:19:7;-1:-1:-1;;;;;1795:19:7;;;;;;;;;;;;1788:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1716:103;;;:::o;341:26:2:-;;;;;;:::o;4763:130::-;653:5:5;;639:10;-1:-1:-1;;;;;639:19:5;;;653:5;;639:19;631:28;;;;;;4844:44:2;;:20;:44;4763:130::o;2028:164:7:-;2084:7;2115:20;;;:10;:20;;;;;;-1:-1:-1;;;;;2115:20:7;2149:19;;;2141:28;;;;;;2182:5;2028:164;-1:-1:-1;;2028:164:7:o;1403:109::-;-1:-1:-1;;;;;1481:19:7;1459:7;1481:19;;;:11;:19;;;;;:26;;1403:109::o;326:36:3:-;;;;:::o;5662:512::-;5771:18;5795:13;5814:16;5836:11;;:::i;:::-;5853:13;5911:33;;;:20;:33;;;;;:50;;5853:13;;5911:33;:50;;;;;;;;;;;;;;;;;;;;;;;;5989:22;;6034:18;;;;;6078:21;6113:16;;6106:23;;5989:22;;-1:-1:-1;6034:18:3;;;;;-1:-1:-1;6078:21:3;;;;;;;;-1:-1:-1;5911:50:3;;-1:-1:-1;6113:16:3;;-1:-1:-1;;6034:18:3;6106:23;;;6034:18;6106:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6151:11;:17;;;6135:34;;5662:512;;;;;;;;;:::o;4897:58:2:-;653:5:5;;639:10;-1:-1:-1;;;;;639:19:5;;;653:5;;639:19;631:28;;;;;;4937:6:2;:13;;-1:-1:-1;;4937:13:2;4946:4;4937:13;;;4897:58::o;238:20:5:-;;;-1:-1:-1;;;;;238:20:5;;:::o;969:67:3:-;;;;;;;;;;;;;:::o;536:64::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;536:64:3;;-1:-1:-1;536:64:3:o;2013:569:2:-;707:6;;2326:25;;707:6;;:15;699:24;;;;;;-1:-1:-1;;;;;793:10:2;776:28;;;;;:16;:28;;;;;;;;:36;;:28;:36;768:45;;;;;;2215:33;;;;:20;:33;;;;;;2252:10;-1:-1:-1;;;;;2215:47:2;;;:33;;:47;2207:56;;;;;;2291:1;2277:15;;2269:24;;;;;;2317:1;2307:11;;;;2299:20;;;;;;2354:9;:22;;2364:11;;2354:22;;;;;;;;;;;;;;;;;;;2391:15;;;;2354:22;;-1:-1:-1;2391:15:2;;:24;2383:33;;;;;;2430:13;;;;;;;;;:22;2422:31;;;;;;2467:14;;;;;;;;;:23;2459:32;;;;;;2505:72;2524:11;2537:15;2554:7;2563:5;2570:6;2505:18;:72::i;:::-;2013:569;;;;;;:::o;214:83:1:-;255:14;;:::i;:::-;277:15;;;;;;;;;;;;;;;;;214:83;-1:-1:-1;214:83:1:o;268:48:2:-;;;;;;;;;;;;;;;:::o;5291:71::-;653:5:5;;639:10;-1:-1:-1;;;;;639:19:5;;;653:5;;639:19;631:28;;;;;;5351:5:2;;-1:-1:-1;;;;;5351:5:2;5338:19;853:62:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;853:62:3;;-1:-1:-1;853:62:3;;;;;;;;;;;;;;-1:-1:-1;;853:62:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2762:140:7:-;2830:8;971:10;-1:-1:-1;;;;;950:31:7;:17;958:8;950:7;:17::i;:::-;-1:-1:-1;;;;;950:31:7;;942:40;;;;;;2846:51;2871:10;2883:3;2888:8;2846:24;:51::i;:::-;2762:140;;;:::o;5066:158:3:-;653:5:5;;639:10;-1:-1:-1;;;;;639:19:5;;;653:5;;639:19;631:28;;;;;;5174:4:3;5154:24;;;5146:33;;;;;;5185:15;:34;5066:158::o;5125:101:2:-;653:5:5;;639:10;-1:-1:-1;;;;;639:19:5;;;653:5;;639:19;631:28;;;;;;-1:-1:-1;;;;;5188:25:2;5216:5;5188:25;;;:16;:25;;;;;:33;;-1:-1:-1;;5188:33:2;;;5125:101::o;4622:376:3:-;4828:16;4697:15;;;4689:24;;;;;;4727:33;;;;:20;:33;;;;;;4764:10;-1:-1:-1;;;;;4727:47:3;;;:33;;:47;4719:56;;;;;;4820:1;4789:28;;;:15;:28;;;;;;:32;4781:41;;;;;;-1:-1:-1;4847:28:3;;;;:15;:28;;;;;;;;4881:32;;;-1:-1:-1;;;;;4919:10:3;:19;;:29;;;;;4847:28;;4919:29;;;;;;;;;;;;;;;;;;;;;;;;;4971:11;4955:38;4984:8;4955:38;;;;;;;;;;;;;;4622:376;;:::o;4278:413:2:-;653:5:5;;4493:34:2;;;;639:10:5;-1:-1:-1;;;;;639:19:5;;;653:5;;639:19;631:28;;;;;;4367:1:2;4353:15;;4345:24;;;;;;4382:9;:22;;4392:11;;4382:22;;;;;;;;;;;;;;;;;;4375:29;;-1:-1:-1;;4375:29:2;;;4382:22;4375:29;;;;4382:22;4375:29;:::i;:::-;;;;;;;:::i;:::-;-1:-1:-1;4375:29:2;;;;-1:-1:-1;;4375:29:2;;;4410:9;:22;;4375:29;;4410:9;4420:11;;4410:22;;;;;;;;;;;;;;:27;:22;;;;;:27;:34;;;;;;;-1:-1:-1;;4410:34:2;;;;;;;;;4481:5;;4450:9;:22;;-1:-1:-1;;;;;4481:5:2;;;;4460:11;;4450:22;;;;;;;;;;;;;;;;;;;;;;:36;;-1:-1:-1;;4450:36:2;-1:-1:-1;;;;;4450:36:2;;;;;;;;;;;4530:33;;;:20;:33;;;;;;;-1:-1:-1;4450:22:2;-1:-1:-1;4569:87:2;4593:19;;4589:23;;4569:87;;;4634:12;4647:1;4634:15;;;;;;;;;;;;;;;;;;;;;;4627:22;;;;;;;;;;;;;;-1:-1:-1;;4627:22:2;;;4634:15;4627:22;;;;4634:15;4627:22;:::i;:::-;-1:-1:-1;;4614:3:2;;4569:87;;;4661:25;4674:11;4661:25;;;;;;;;;;;;;;4278:413;;;:::o;3541:174:7:-;3603:35;3617:10;3629:8;3603:13;:35::i;:::-;3595:44;;;;;;;;3645:65;3670:17;3678:8;3670:7;:17::i;:::-;3689:10;3701:8;3645:24;:65::i;:::-;3541:174;:::o;751:57:3:-;;;;;;;;;;;;;:::o;186:30:2:-;;;;:::o;432:62:3:-;;;;;;;;;;;;-1:-1:-1;;;;;432:62:3;;:::o;2702:810:2:-;707:6;;2833:4;;;;;;;;707:6;;:15;699:24;;;;;;2875:9;:22;;;;;;;;;;;;;;;;;;;;2946:15;2875:22;;;;;2946:15;;;;2875:22;;-1:-1:-1;2946:15:2;;:23;;:15;:23;2938:32;;;;;;2984:13;;;;;;;;;:22;2976:31;;;;;;3086:33;;;;;;;:20;:33;;;;;:50;;3120:15;;3086:50;;;;;;;;;;;;;;;;;;;3151:21;;;;3086:50;;-1:-1:-1;3151:21:2;;;;;:25;3143:34;;;;;;3188:17;;;;:22;3184:82;;3241:17;;;;3228:9;:30;3220:39;;;;;;-1:-1:-1;3313:21:2;;;;3345:28;;;3292:18;3345:28;;;:15;:28;;;;;:41;;3377:9;3345:41;;;;;;3392:11;:24;;;;;;3313:21;;;;;;3292:18;;:42;;;;:18;:46;;3430:77;;3345:28;3456:15;;3292:46;;3485:10;;3430:12;:77::i;6178:446:3:-;6249:18;6273:13;6292:17;6315;6338:22;6370:19;6392:6;6399:3;6392:11;;;;;;;;;;;;;;;;;;;;;;;6431:16;;6470:11;;;;6508:16;;;;6598:20;;;;;6431:16;;6470:11;;-1:-1:-1;6508:16:3;;;;;;-1:-1:-1;;;;;;6551:15:3;;;;-1:-1:-1;6598:20:3;-1:-1:-1;6178:446:3;-1:-1:-1;;;6178:446:3:o;7069:125::-;7139:7;7161:28;;;:15;:28;;;;;;;7069:125::o;832:169:5:-;653:5;;639:10;-1:-1:-1;;;;;639:19:5;;;653:5;;639:19;631:28;;;;;;-1:-1:-1;;;;;908:22:5;;;;900:31;;;;;;958:5;;-1:-1:-1;;;;;937:37:5;;;;958:5;937:37;;;;;;;;;;980:5;:16;;-1:-1:-1;;980:16:5;-1:-1:-1;;;;;980:16:5;;;;;;;;;;832:169::o;891:363:2:-;707:6;;1032:7;;;;707:6;;:15;699:24;;;;;;-1:-1:-1;;;;;793:10:2;776:28;;;;;:16;:28;;;;;;;;:36;;:28;:36;768:45;;;;;;1070:20;;1057:9;:33;1049:42;;;;;;1119:50;1135:10;1147:13;1162:6;1119:15;:50::i;:::-;1206:20;;1175:27;;;;:15;:27;;;;;:51;;;;;;;:27;891:363;-1:-1:-1;;;;891:363:2:o;6792:175:3:-;-1:-1:-1;;;;;6924:30:3;;6899:10;6924:30;;;:22;:30;;;;;:38;;6955:6;;6924:38;;;;;;;;;;;;;;;6919:43;;6792:175;;;;:::o;3464:546::-;3605:7;3623:31;;:::i;:::-;3803:24;3657:139;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3830:33:3;;;:20;:33;;;;:52;;3657:139;;-1:-1:-1;3830:33:3;:52;;;;:33;:52;;:::i;:::-;;;;;;;;;3869:12;;3830:52;;;3869:12;3830:52;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3830:52:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;3889:37:3;;;;:24;:37;;;;;;;:42;;3930:1;3889:42;;;3803:79;;-1:-1:-1;3914:11:3;;3938:37;;3969:5;;3938:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;3938:37:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3989:16;3464:546;-1:-1:-1;;;;;;3464:546:3:o;4069:501::-;4259:37;;;;:24;:37;;;;;;4241:55;;4234:63;;;;4304:33;;;;:20;:33;;;;;:50;;4364:7;;4304:33;4338:15;;4304:50;;;;;;;;;;;;;;;;:57;;;:67;;;;;;;;;;;;;;;;;;4435:5;4377:20;:33;4398:11;4377:33;;;;;;;;;;;4411:15;4377:50;;;;;;;;;;;;;;;;;;;;:55;;:63;;;;;;;;;;:::i;:::-;-1:-1:-1;4446:33:3;;;;:20;:33;;;;;:50;;4505:6;;4446:33;4480:15;;4446:50;;;;;;;;;;;;;;;;:56;;:65;;;;4549:15;4536:11;4518:47;;;;;;;;;;4069:501;;;;;:::o;5265:342:7:-;-1:-1:-1;;;;;5368:17:7;;;;5360:26;;;;;;5407:17;5415:8;5407:7;:17::i;:::-;-1:-1:-1;;;;;5400:24:7;;;;;;;5392:33;;;;;;5460:5;-1:-1:-1;;;;;5439:26:7;:17;5447:8;5439:7;:17::i;:::-;-1:-1:-1;;;;;5439:26:7;;5431:35;;;;;;5473:30;5487:5;5494:8;5473:13;:30::i;:::-;5509:28;5521:5;5528:8;5509:11;:28::i;:::-;5543:23;5552:3;5557:8;5543;:23::i;:::-;5588:3;-1:-1:-1;;;;;5572:30:7;5581:5;-1:-1:-1;;;;;5572:30:7;;5593:8;5572:30;;;;;;;;;;;;;;5265:342;;;:::o;4830:135::-;4910:4;4954:6;-1:-1:-1;;;;;4929:31:7;:21;4941:8;4929:11;:21::i;:::-;-1:-1:-1;;;;;4929:31:7;;;4830:135;-1:-1:-1;;;4830:135:7:o;2169:605:3:-;2339:7;2356:19;;:::i;:::-;2617:18;2378:160;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2378:160:3;;;;;;;;;;;;;;;;;;;-1:-1:-1;2545:33:3;;;:20;:33;;;;:50;;2378:160;;-1:-1:-1;2609:1:3;;2485:15;;2545:50;;;;;;;;;;;;;;:60;:50;;;;;:60;:65;;;;;;;;;;;;;;;;;;;;;;;;;;;2638:6;:19;;-1:-1:-1;2638:19:3;;;:6;:19;;:::i;:::-;;;;;;;;;2650:6;;2638:19;;;2650:6;2638:19;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;2638:19:3;-1:-1:-1;;;;;2638:19:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2617:40;;2664:25;2670:6;2678:10;2664:5;:25::i;:::-;2738:6;-1:-1:-1;;;;;2696:49:3;2721:15;2708:11;2696:49;;;;;;;;;;2759:10;2169:605;-1:-1:-1;;;;;;;2169:605:3:o;2805:607::-;2925:7;2942:25;;:::i;:::-;3130:21;2970:153;;;;;;;;;;-1:-1:-1;;;;;2970:153:3;;;;;;;;;;;;;;;-1:-1:-1;2970:153:3;;;;;;;;;;;;;;;;3154:9;:25;;2970:153;;-1:-1:-1;2970:153:3;;3154:25;;;;:9;:25;;:::i;:::-;;;;;;;;;3169:9;;3154:25;;;3169:9;3154:25;;;-1:-1:-1;;3154:25:3;-1:-1:-1;;;;;3154:25:3;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;-1:-1:-1;;3154:25:3;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3154:25:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3154:29:3;-1:-1:-1;3190:35:3;;;:20;:35;;;;;;;;:44;;-1:-1:-1;;;;;3190:44:3;;-1:-1:-1;;3190:44:3;;;;;;;;3240:30;;:22;:30;;;;;:50;;3154:29;;-1:-1:-1;3240:30:3;-1:-1:-1;3240:50:3;;;:30;:50;;:::i;:::-;-1:-1:-1;3240:50:3;;;;;;;;;;;;;;;-1:-1:-1;;;;;3296:35:3;;;;;:27;:35;;;;;;;;:40;;3335:1;3296:40;;;3276:13;;3343:37;;;;;;;;;;3394:13;2805:607;-1:-1:-1;;;;;2805:607:3:o;5757:181:7:-;5857:6;-1:-1:-1;;;;;5836:27:7;:17;5844:8;5836:7;:17::i;:::-;-1:-1:-1;;;;;5836:27:7;;5828:36;;;;;;5897:1;5870:24;;;:14;:24;;;;;;:28;;-1:-1:-1;;5870:28:7;;;-1:-1:-1;;;;;5904:29:7;;;;;5885:8;;5904:29;;;;;;;;;;;;;5757:181;;:::o;6768:907::-;6878:18;6931:22;6985:17;6865:5;-1:-1:-1;;;;;6844:26:7;:17;6852:8;6844:7;:17::i;:::-;-1:-1:-1;;;;;6844:26:7;;6836:35;;;;;;6899:26;;;;:16;:26;;;;;;;-1:-1:-1;6956:23:7;6977:1;6956:16;6966:5;6956:9;:16::i;:::-;:20;:23;:20;:23;:::i;:::-;-1:-1:-1;;;;;7005:18:7;;;;;;:11;:18;;;;;:34;;6931:48;;-1:-1:-1;7005:18:7;6931:48;;7005:34;;;;;;;;;;;;;;;;;;7046:20;;;:10;:20;;;;;;:24;;-1:-1:-1;;7046:24:7;;;-1:-1:-1;;;;;7076:18:7;;;;:11;:18;;;;;:30;;7005:34;;-1:-1:-1;7005:34:7;;7095:10;;7076:30;;;;;;;;;;;;;;;;;:42;;;;-1:-1:-1;;;;;7124:18:7;;;;:11;:18;;;;;;:34;;7143:14;;7124:34;;;;;;;;;;;;;;;;;:38;;;;-1:-1:-1;;;;;7523:18:7;;;;:11;:18;;;;;;:27;;;;;-1:-1:-1;;7523:27:7;;;:::i;:::-;-1:-1:-1;7585:1:7;7556:26;;;:16;:26;;;;;;:30;;;7592:27;;;;;:40;;;7652:11;:18;;7668:1;7652:18;:15;:18;:::i;:::-;7638:11;:32;-1:-1:-1;;;;;6768:907:7:o;6197:296::-;6341:14;6268:20;;;:10;:20;;;;;;-1:-1:-1;;;;;6268:20:7;:34;6260:43;;;;;;6309:20;;;;:10;:20;;;;;:26;;-1:-1:-1;;6309:26:7;-1:-1:-1;;;;;6309:26:7;;;;;6358:14;6309:26;6358:9;:14::i;:::-;-1:-1:-1;;;;;6378:16:7;;;;;;:11;:16;;;;;:31;;6341;;-1:-1:-1;6378:16:7;:31;;;;:16;:31;;:::i;:::-;-1:-1:-1;6378:31:7;;;;;;;;;;;;;;;6415:26;;;:16;:26;;;;;:35;;;6470:11;:18;;6486:1;6470:18;:15;:18;:::i;:::-;6456:11;:32;-1:-1:-1;;;6197:296:7:o;3892:155::-;-1:-1:-1;;;;;3961:17:7;;;;3953:26;;;;;;3985:23;3994:3;3999:8;3985;:23::i;:::-;4028:3;-1:-1:-1;;;;;4014:28:7;4023:3;4014:28;4033:8;4014:28;;;;;;;;;;;;;;3892:155;;:::o;836:110:4:-;894:7;916:6;;;;909:14;;;;-1:-1:-1;936:5:4;;;836:110::o;1008:129::-;1066:7;1093:5;;;1111:6;;;;1104:14;;;;1131:1;1008:129;-1:-1:-1;;;1008:129:4:o;53:288:0:-;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;53:288:0;;;-1:-1:-1;53:288:0;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;53:288:0;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;53:288:0;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;-1:-1:-1;53:288:0;;;;;-1:-1:-1;;53:288:0;;;;;;",
  "source": "pragma solidity ^0.4.19;\n\nimport \"./dapp/Core.sol\";\n\ncontract DAPP is Core {\n    function DAPP() public {\n    founderAddress = msg.sender;\n    campaignManagers[msg.sender] = true;\n\n    _createCampaign(msg.sender, \"Genesis Campaign\", \"\");\n    _createCertificate(0, 1, \"Genesis Certificate\", 0);\n    _createToken(0, 0, 0, msg.sender, 0);\n  }\n}",
  "sourcePath": "/home/hayek/proj/heritage/contracts/DAPP.sol",
  "ast": {
    "absolutePath": "/home/hayek/proj/heritage/contracts/DAPP.sol",
    "exportedSymbols": {
      "DAPP": [
        44
      ]
    },
    "id": 45,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".19"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "absolutePath": "/home/hayek/proj/heritage/contracts/dapp/Core.sol",
        "file": "./dapp/Core.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 45,
        "sourceUnit": 622,
        "src": "26:25:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": [],
            "baseName": {
              "contractScope": null,
              "id": 3,
              "name": "Core",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 621,
              "src": "70:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Core_$621",
                "typeString": "contract Core"
              }
            },
            "id": 4,
            "nodeType": "InheritanceSpecifier",
            "src": "70:4:0"
          }
        ],
        "contractDependencies": [
          70,
          621,
          1244,
          1398,
          1450,
          1948
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 44,
        "linearizedBaseContracts": [
          44,
          621,
          1244,
          1398,
          70,
          1948,
          1450
        ],
        "name": "DAPP",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 42,
              "nodeType": "Block",
              "src": "104:235:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 7,
                      "name": "founderAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 631,
                      "src": "110:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 8,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1961,
                        "src": "127:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 9,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "127:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "110:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 11,
                  "nodeType": "ExpressionStatement",
                  "src": "110:27:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 12,
                        "name": "campaignManagers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 85,
                        "src": "143:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 15,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 13,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1961,
                          "src": "160:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 14,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "160:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "143:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 16,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "174:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "143:35:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18,
                  "nodeType": "ExpressionStatement",
                  "src": "143:35:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 20,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1961,
                          "src": "201:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 21,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "201:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "47656e657369732043616d706169676e",
                        "id": 22,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "213:18:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_776d2a83102c2c5a654e9f2523c1a948fdf30312e34baf03a7a5a698f3c7d1a5",
                          "typeString": "literal_string \"Genesis Campaign\""
                        },
                        "value": "Genesis Campaign"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 23,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "233:2:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_776d2a83102c2c5a654e9f2523c1a948fdf30312e34baf03a7a5a698f3c7d1a5",
                          "typeString": "literal_string \"Genesis Campaign\""
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "id": 19,
                      "name": "_createCampaign",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 846,
                      "src": "185:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_uint256_$",
                        "typeString": "function (address,string memory,string memory) returns (uint256)"
                      }
                    },
                    "id": 24,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "185:51:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 25,
                  "nodeType": "ExpressionStatement",
                  "src": "185:51:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 27,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "261:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 28,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "264:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "47656e65736973204365727469666963617465",
                        "id": 29,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "267:21:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_2d7b05f78efada24eb807564dd388b2475233c285f4ed8728a7a8d91e3a5ebeb",
                          "typeString": "literal_string \"Genesis Certificate\""
                        },
                        "value": "Genesis Certificate"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 30,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "290:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_2d7b05f78efada24eb807564dd388b2475233c285f4ed8728a7a8d91e3a5ebeb",
                          "typeString": "literal_string \"Genesis Certificate\""
                        },
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        }
                      ],
                      "id": 26,
                      "name": "_createCertificate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 892,
                      "src": "242:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint24_$_t_string_memory_ptr_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint24,string memory,uint256) returns (uint256)"
                      }
                    },
                    "id": 31,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "242:50:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 32,
                  "nodeType": "ExpressionStatement",
                  "src": "242:50:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 34,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "311:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 35,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "314:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 36,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "317:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 37,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1961,
                          "src": "320:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 38,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "320:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 39,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "332:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        }
                      ],
                      "id": 33,
                      "name": "_createToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 788,
                      "src": "298:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint24_$_t_address_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint24,address,uint256) returns (uint256)"
                      }
                    },
                    "id": 40,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "298:36:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 41,
                  "nodeType": "ExpressionStatement",
                  "src": "298:36:0"
                }
              ]
            },
            "documentation": null,
            "id": 43,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "DAPP",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "94:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 6,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "104:0:0"
            },
            "scope": 44,
            "src": "81:258:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 45,
        "src": "53:288:0"
      }
    ],
    "src": "0:341:0"
  },
  "legacyAST": {
    "absolutePath": "/home/hayek/proj/heritage/contracts/DAPP.sol",
    "exportedSymbols": {
      "DAPP": [
        44
      ]
    },
    "id": 45,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".19"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "absolutePath": "/home/hayek/proj/heritage/contracts/dapp/Core.sol",
        "file": "./dapp/Core.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 45,
        "sourceUnit": 622,
        "src": "26:25:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": [],
            "baseName": {
              "contractScope": null,
              "id": 3,
              "name": "Core",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 621,
              "src": "70:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Core_$621",
                "typeString": "contract Core"
              }
            },
            "id": 4,
            "nodeType": "InheritanceSpecifier",
            "src": "70:4:0"
          }
        ],
        "contractDependencies": [
          70,
          621,
          1244,
          1398,
          1450,
          1948
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 44,
        "linearizedBaseContracts": [
          44,
          621,
          1244,
          1398,
          70,
          1948,
          1450
        ],
        "name": "DAPP",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 42,
              "nodeType": "Block",
              "src": "104:235:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 7,
                      "name": "founderAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 631,
                      "src": "110:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 8,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1961,
                        "src": "127:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 9,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "127:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "110:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 11,
                  "nodeType": "ExpressionStatement",
                  "src": "110:27:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 12,
                        "name": "campaignManagers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 85,
                        "src": "143:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 15,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 13,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1961,
                          "src": "160:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 14,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "160:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "143:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 16,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "174:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "143:35:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 18,
                  "nodeType": "ExpressionStatement",
                  "src": "143:35:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 20,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1961,
                          "src": "201:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 21,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "201:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "47656e657369732043616d706169676e",
                        "id": 22,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "213:18:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_776d2a83102c2c5a654e9f2523c1a948fdf30312e34baf03a7a5a698f3c7d1a5",
                          "typeString": "literal_string \"Genesis Campaign\""
                        },
                        "value": "Genesis Campaign"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 23,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "233:2:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_776d2a83102c2c5a654e9f2523c1a948fdf30312e34baf03a7a5a698f3c7d1a5",
                          "typeString": "literal_string \"Genesis Campaign\""
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "id": 19,
                      "name": "_createCampaign",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 846,
                      "src": "185:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_uint256_$",
                        "typeString": "function (address,string memory,string memory) returns (uint256)"
                      }
                    },
                    "id": 24,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "185:51:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 25,
                  "nodeType": "ExpressionStatement",
                  "src": "185:51:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 27,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "261:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 28,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "264:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "47656e65736973204365727469666963617465",
                        "id": 29,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "267:21:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_2d7b05f78efada24eb807564dd388b2475233c285f4ed8728a7a8d91e3a5ebeb",
                          "typeString": "literal_string \"Genesis Certificate\""
                        },
                        "value": "Genesis Certificate"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 30,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "290:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_2d7b05f78efada24eb807564dd388b2475233c285f4ed8728a7a8d91e3a5ebeb",
                          "typeString": "literal_string \"Genesis Certificate\""
                        },
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        }
                      ],
                      "id": 26,
                      "name": "_createCertificate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 892,
                      "src": "242:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint24_$_t_string_memory_ptr_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint24,string memory,uint256) returns (uint256)"
                      }
                    },
                    "id": 31,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "242:50:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 32,
                  "nodeType": "ExpressionStatement",
                  "src": "242:50:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 34,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "311:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 35,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "314:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 36,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "317:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 37,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1961,
                          "src": "320:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 38,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "320:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 39,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "332:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        }
                      ],
                      "id": 33,
                      "name": "_createToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 788,
                      "src": "298:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint24_$_t_address_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint24,address,uint256) returns (uint256)"
                      }
                    },
                    "id": 40,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "298:36:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 41,
                  "nodeType": "ExpressionStatement",
                  "src": "298:36:0"
                }
              ]
            },
            "documentation": null,
            "id": 43,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "DAPP",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "94:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 6,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "104:0:0"
            },
            "scope": 44,
            "src": "81:258:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 45,
        "src": "53:288:0"
      }
    ],
    "src": "0:341:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.21+commit.dfe3193c.Emscripten.clang"
  },
  "networks": {
    "313": {
      "events": {},
      "links": {},
      "address": "0x1aee2a793866471f98e3e2a5bbf5d555d7e09260",
      "transactionHash": "0x01e9ba130c7c111fe8f6acb7aafde68a8cc62520ecab7d1053b0fc10805ed13a"
    },
    "929": {
      "events": {},
      "links": {},
      "address": "0xf0018845251bd4e0211ce03c357e5505ede25a8e",
      "transactionHash": "0xdcece08ea80e179faecf1aff50244b6cca08ccba042a9fe81ae9ae768e877b91"
    }
  },
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-06-04T23:20:54.719Z"
}