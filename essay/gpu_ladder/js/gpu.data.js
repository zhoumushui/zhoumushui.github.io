/**
 * Created by AZ on 2018/10/27.
 *
 * Range by EXPIndex.
 */
var GPUData = [
    {
        "Name": "GeForce RTX 2080 Ti", "Brand": "NVIDIA", "GPU": "TU102-300",
        "LaunchDate": "2018-08-21", "LaunchPrice": "9999", "DirectX": "12.1",
        "CoreClock": "1350 ", "BoostClock": "1635 ", "SP": "4352", "ShaderClock": "1700 ",
        "MemSize": "11264", "MemType": "GDDR6", "MemInterface": "352", "MemClock": "14000",
        "EXPIndex": "292.0 ", "TBP": "260 ", "Review": "64175 ",
        "DieSize": "754 ", "TCount": "18600 ", "MProcess": "12 "
    }, {
        "Name": "GeForce RTX 2080", "Brand": "NVIDIA", "GPU": "TU104-400",
        "LaunchDate": "2018-08-21", "LaunchPrice": "6499", "DirectX": "12.1",
        "CoreClock": "1515 ", "BoostClock": "1800 ", "SP": "2944", "ShaderClock": "1700 ",
        "MemSize": "8192", "MemType": "GDDR6", "MemInterface": "256", "MemClock": "14000",
        "EXPIndex": "233.0 ", "TBP": "225 ", "Review": "64175 ",
        "DieSize": "545 ", "TCount": "13600 ", "MProcess": "12 "
    }, {
        "Name": "GeForce GTX 1080 Ti", "Brand": "NVIDIA", "GPU": "GP102",
        "LaunchDate": "2017-03-01", "LaunchPrice": "5699", "DirectX": "12.1",
        "CoreClock": "1480 ", "BoostClock": "1582 ", "SP": "3584", "ShaderClock": "1700 ",
        "MemSize": "11264", "MemType": "GDDR5X", "MemInterface": "352", "MemClock": "11000",
        "EXPIndex": "231.0 ", "TBP": "250 ", "Review": "52880 ",
        "DieSize": "471 ", "TCount": "12000 ", "MProcess": "16 "
    }, {
        "Name": "NVIDIA TITAN Xp", "Brand": "NVIDIA", "GPU": "GP102",
        "LaunchDate": "2017-04-06", "LaunchPrice": "9699", "DirectX": "12.1",
        "CoreClock": "1405 ", "BoostClock": "1582 ", "SP": "3840", "ShaderClock": "1680 ",
        "MemSize": "12288", "MemType": "GDDR5X", "MemInterface": "384", "MemClock": "11408",
        "EXPIndex": "228.0 ", "TBP": "250 ",
        "DieSize": "471 ", "TCount": "12000 ", "MProcess": "16 "
    }, {
        "Name": "NVIDIA TITAN X", "Brand": "NVIDIA", "GPU": "GP102",
        "LaunchDate": "2016-07-22", "LaunchPrice": "9499", "DirectX": "12.1",
        "CoreClock": "1417 ", "BoostClock": "1531 ", "SP": "3584", "ShaderClock": "1620 ",
        "MemSize": "12288", "MemType": "GDDR5X", "MemInterface": "384", "MemClock": "10000",
        "EXPIndex": "212.0 ", "TBP": "250 ",
        "DieSize": "471 ", "TCount": "12000 ", "MProcess": "16 "
    }, {
        "Name": "GeForce RTX 2070", "Brand": "NVIDIA", "GPU": "TU106-400",
        "LaunchDate": "2018-08-21", "LaunchPrice": "4799", "DirectX": "12.1",
        "CoreClock": "1410 ", "BoostClock": "1710 ", "SP": "2304", "ShaderClock": "1700 ",
        "MemSize": "8192", "MemType": "GDDR6", "MemInterface": "256", "MemClock": "14000",
        "EXPIndex": "186.7 ", "TBP": "185 ", "Review": "64587 ",
        "DieSize": "445 ", "TCount": "10800 ", "MProcess": "12 "
    }, {
        "Name": "Radeon Pro Duo", "Brand": "AMD", "GPU": "Fiji*2",
        "LaunchDate": "2016-04-27", "LaunchPrice": "13999", "DirectX": "12",
        "CoreClock": "910 ", "BoostClock": "1000 ", "SP": "4096", "ShaderClock": "910 ",
        "MemSize": "4096", "MemType": "HBM", "MemInterface": "4096", "MemClock": "1000",
        "EXPIndex": "181.1 ", "TBP": "350 ", "Review": "46810 ",
        "DieSize": "596 ", "TCount": "17800 ", "MProcess": "28 "
    }, {
        "Name": "GeForce GTX 1080", "Brand": "NVIDIA", "GPU": "GP104",
        "LaunchDate": "2016-05-06", "LaunchPrice": "5399", "DirectX": "12.1",
        "CoreClock": "1607 ", "BoostClock": "1733 ", "SP": "2560", "ShaderClock": "1733 ",
        "MemSize": "8192", "MemType": "GDDR5X", "MemInterface": "256", "MemClock": "10000",
        "EXPIndex": "176.1 ", "TBP": "180 ", "Review": "47191 ",
        "DieSize": "314 ", "TCount": "7200 ", "MProcess": "16 "
    }, {
        "Name": "Radeon R9 295X2", "Brand": "AMD", "GPU": "Hawail XT",
        "LaunchDate": "2014-04-09", "LaunchPrice": "10999", "DirectX": "12",
        "CoreClock": "1018 ", "BoostClock": "1018 ", "SP": "2816", "ShaderClock": "1018 ",
        "MemSize": "4096", "MemType": "GDDR5", "MemInterface": "512", "MemClock": "5000",
        "EXPIndex": "172.8 ", "TBP": "500 ", "Review": "32619 ",
        "DieSize": "438 ", "TCount": "12400 ", "MProcess": "28 "
    }, {
        "Name": "Radeon RX Vega 64", "Brand": "AMD", "GPU": "Vega 10",
        "LaunchDate": "2017-08-14", "LaunchPrice": "4899", "DirectX": "12.1",
        "CoreClock": "1247 ", "BoostClock": "1546 ", "SP": "4096", "ShaderClock": "1247 ",
        "MemSize": "8192", "MemType": "HBM2", "MemInterface": "2048", "MemClock": "945",
        "EXPIndex": "172.6 ", "TBP": "295 ", "Review": "56323 ",
        "DieSize": "486 ", "TCount": "12500 ", "MProcess": "14 "
    }, {
        "Name": "GeForce GTX TITAN Z", "Brand": "NVIDIA", "GPU": "GK110",
        "LaunchDate": "2014-03-26", "LaunchPrice": "21999", "DirectX": "11.1",
        "CoreClock": "706 ", "BoostClock": "876 ", "SP": "2880", "ShaderClock": "876 ",
        "MemSize": "6144", "MemType": "GDDR5", "MemInterface": "384", "MemClock": "7000",
        "EXPIndex": "165.0 ", "TBP": "375 ", "Review": "33713 ",
        "DieSize": "561 ", "TCount": "14200 ", "MProcess": "28 "
    }, {
        "Name": "GeForce GTX 1070 Ti", "Brand": "NVIDIA", "GPU": "GP104-300",
        "LaunchDate": "2017-10-26", "LaunchPrice": "3499", "DirectX": "12.1",
        "CoreClock": "1607 ", "BoostClock": "1683 ", "SP": "2432", "ShaderClock": "1607 ",
        "MemSize": "8192", "MemType": "GDDR5", "MemInterface": "256", "MemClock": "8000",
        "EXPIndex": "157.1 ", "TBP": "180 ", "Review": "57631 ",
        "DieSize": "314 ", "TCount": "7200 ", "MProcess": "16 "
    }, {
        "Name": "Radeon RX Vega 56", "Brand": "AMD", "GPU": "Vega 10",
        "LaunchDate": "2017-08-28", "LaunchPrice": "4199", "DirectX": "12.1",
        "CoreClock": "1156 ", "BoostClock": "1471 ", "SP": "3585", "ShaderClock": "1156 ",
        "MemSize": "8192", "MemType": "HBM2", "MemInterface": "2048", "MemClock": "800",
        "EXPIndex": "156.2 ", "TBP": "210 ", "Review": "56323 ",
        "DieSize": "486 ", "TCount": "12500 ", "MProcess": "14 "
    },  { // AZ Add
        "Name": "GeForce RTX 2060", "Brand": "NVIDIA", "GPU": "TU106-300A-A1",
        "LaunchDate": "2019", "LaunchPrice": "1999", "DirectX": "12.1",
        "CoreClock": "1320 ", "BoostClock": "1620 ", "SP": "1536", "ShaderClock": "- ",
        "MemSize": "6144", "MemType": "GDDR6", "MemInterface": "192", "MemClock": "1750",
        "EXPIndex": "150.0 ", "TBP": "120 ", "Review": "- ",
        "DieSize": "445 ", "TCount": "10800 ", "MProcess": "12 "
    }, {
        "Name": "GeForce GTX Titan X", "Brand": "NVIDIA", "GPU": "GM200",
        "LaunchDate": "2015-03-18", "LaunchPrice": "7999", "DirectX": "12.1",
        "CoreClock": "1000 ", "BoostClock": "1075 ", "SP": "3072", "ShaderClock": "1075 ",
        "MemSize": "12288", "MemType": "GDDR5", "MemInterface": "384", "MemClock": "7000",
        "EXPIndex": "148.7 ", "TBP": "275 ", "Review": "39410 ",
        "DieSize": "601 ", "TCount": "8000 ", "MProcess": "28 "
    }, {
        "Name": "GeForce GTX 1070", "Brand": "NVIDIA", "GPU": "GP104-200",
        "LaunchDate": "2016-05-06", "LaunchPrice": "3499", "DirectX": "12.1",
        "CoreClock": "1506 ", "BoostClock": "1683 ", "SP": "1920", "ShaderClock": "1750 ",
        "MemSize": "8192", "MemType": "GDDR5", "MemInterface": "256", "MemClock": "8000",
        "EXPIndex": "148.0 ", "TBP": "150 ", "Review": "47423 ",
        "DieSize": "314 ", "TCount": "7200 ", "MProcess": "16 "
    },{
        "Name": "GeForce GTX 980 Ti", "Brand": "NVIDIA", "GPU": "GM200",
        "LaunchDate": "2015-06-01", "LaunchPrice": "4699", "DirectX": "12.1",
        "CoreClock": "1000 ", "BoostClock": "1075 ", "SP": "2816", "ShaderClock": "1075 ",
        "MemSize": "6144", "MemType": "GDDR5", "MemInterface": "384", "MemClock": "7000",
        "EXPIndex": "141.0 ", "TBP": "250 ", "Review": "40817 ",
        "DieSize": "601 ", "TCount": "8000 ", "MProcess": "28 "
    }, { // AZ Add
        "Name": "Radeon RX 590", "Brand": "AMD", "GPU": "Polaris 30",
        "LaunchDate": "2018-11-15", "LaunchPrice": "1999", "DirectX": "12",
        "CoreClock": "1469 ", "BoostClock": "1545 ", "SP": "2304", "ShaderClock": "- ",
        "MemSize": "8192", "MemType": "GDDR5", "MemInterface": "256", "MemClock": "8000",
        "EXPIndex": "132.1 ", "TBP": "225 ", "Review": "- ",
        "DieSize": "233 ", "TCount": "5700 ", "MProcess": "12 "
    }, {
        "Name": "Radeon R9 Fury X", "Brand": "AMD", "GPU": "Fiji",
        "LaunchDate": "2015-06-17", "LaunchPrice": "5099", "DirectX": "12",
        "CoreClock": "1050 ", "BoostClock": "1050 ", "SP": "4096", "ShaderClock": "1050 ",
        "MemSize": "4096", "MemType": "HBM", "MemInterface": "4096", "MemClock": "1000",
        "EXPIndex": "121.8 ", "TBP": "275 ", "Review": "41284 ",
        "DieSize": "596 ", "TCount": "8900 ", "MProcess": "28 "
    }, {
        "Name": "Radeon RX 580", "Brand": "AMD", "GPU": "Polaris 20 XTX",
        "LaunchDate": "2017-04-18", "LaunchPrice": "1899-1999", "DirectX": "12",
        "CoreClock": "1257 ", "BoostClock": "1340 ", "SP": "2304", "ShaderClock": "1290 ",
        "MemSize": "8192", "MemType": "GDDR5", "MemInterface": "256", "MemClock": "8000",
        "EXPIndex": "119.3 ", "TBP": "185 ", "Review": "53482 ",
        "DieSize": "233 ", "TCount": "5700 ", "MProcess": "14 "
    }, {
        "Name": "GeForce GTX 1060 6GB", "Brand": "NVIDIA", "GPU": "GP106-300",
        "LaunchDate": "2016-07-07", "LaunchPrice": "1999", "DirectX": "12.1",
        "CoreClock": "1506 ", "BoostClock": "1709 ", "SP": "1280", "ShaderClock": "1780 ",
        "MemSize": "6144", "MemType": "GDDR5", "MemInterface": "192", "MemClock": "8000",
        "EXPIndex": "118.4 ", "TBP": "120 ", "Review": "48326 ",
        "DieSize": "200 ", "TCount": "4400 ", "MProcess": "16 "
    }, {
        "Name": "Radeon R9 Fury", "Brand": "AMD", "GPU": "Fiji Pro",
        "LaunchDate": "2015-07-11", "LaunchPrice": "4299", "DirectX": "12",
        "CoreClock": "1000 ", "BoostClock": "1000 ", "SP": "3584", "ShaderClock": "1000 ",
        "MemSize": "4096", "MemType": "HBM", "MemInterface": "4096", "MemClock": "1000",
        "EXPIndex": "118.5 ", "TBP": "275 ", "Review": "41809 ",
        "DieSize": "596 ", "TCount": "8900 ", "MProcess": "28 "
    }, {
        "Name": "Radeon RX 480 8GB", "Brand": "AMD", "GPU": "Polaris 20 XT",
        "LaunchDate": "2016-06-01", "LaunchPrice": "1999", "DirectX": "12",
        "CoreClock": "1120 ", "BoostClock": "1266 ", "SP": "2304", "ShaderClock": "1240 ",
        "MemSize": "8196", "MemType": "GDDR5", "MemInterface": "256", "MemClock": "8000",
        "EXPIndex": "116.5 ", "TBP": "150 ", "Review": "47994 ",
        "DieSize": "233 ", "TCount": "5700 ", "MProcess": "14 "
    }, {
        "Name": "Radeon R9 NANO", "Brand": "AMD", "GPU": "Fiji XT",
        "LaunchDate": "2015-08-27", "LaunchPrice": "5099-5999", "DirectX": "12",
        "CoreClock": "875 ", "BoostClock": "1000 ", "SP": "4096", "ShaderClock": "875 ",
        "MemSize": "4096", "MemType": "HBM", "MemInterface": "4096", "MemClock": "1000",
        "EXPIndex": "115.3 ", "TBP": "175 ", "Review": "42854 ",
        "DieSize": "596 ", "TCount": "8900 ", "MProcess": "28 "
    }, {
        "Name": "GeForce GTX 1060 5GB", "Brand": "NVIDIA", "GPU": "GP106-350",
        "LaunchDate": "2017-12-01", "LaunchPrice": "0", "DirectX": "12.1",
        "CoreClock": "1506 ", "BoostClock": "1709 ", "SP": "1280", "ShaderClock": "1780 ",
        "MemSize": "5120", "MemType": "GDDR5", "MemInterface": "160", "MemClock": "8000",
        "EXPIndex": "114.7 ", "TBP": "120 ", "Review": "60253 ",
        "DieSize": "200 ", "TCount": "4400 ", "MProcess": "16 "
    }, {
        "Name": "GeForce GTX 980", "Brand": "NVIDIA", "GPU": "GM204",
        "LaunchDate": "2014-09-19", "LaunchPrice": "3999", "DirectX": "12.1",
        "CoreClock": "1126 ", "BoostClock": "1216 ", "SP": "2048", "ShaderClock": "1216 ",
        "MemSize": "4096", "MemType": "GDDR5", "MemInterface": "256", "MemClock": "7000",
        "EXPIndex": "114.0 ", "TBP": "165 ", "Review": "36103 ",
        "DieSize": "398 ", "TCount": "5200 ", "MProcess": "28 "
    }, {
        "Name": "Radeon RX 480 4GB", "Brand": "AMD", "GPU": "Polaris 20 XT",
        "LaunchDate": "2016-06-01", "LaunchPrice": "1799", "DirectX": "12",
        "CoreClock": "1120 ", "BoostClock": "1266 ", "SP": "2304", "ShaderClock": "1240 ",
        "MemSize": "4096", "MemType": "GDDR5", "MemInterface": "256", "MemClock": "7000",
        "EXPIndex": "113.6 ", "TBP": "150 ", "Review": "49422 ",
        "DieSize": "233 ", "TCount": "5700 ", "MProcess": "14 "
    }, {
        "Name": "GeForce GTX 1060 3GB", "Brand": "NVIDIA", "GPU": "GP106-400",
        "LaunchDate": "2016-08-18", "LaunchPrice": "1699", "DirectX": "12.1",
        "CoreClock": "1506 ", "BoostClock": "1709 ", "SP": "1152", "ShaderClock": "1790 ",
        "MemSize": "3072", "MemType": "GDDR5", "MemInterface": "192", "MemClock": "8000",
        "EXPIndex": "112.7 ", "TBP": "115 ", "Review": "50207 ",
        "DieSize": "200 ", "TCount": "4400 ", "MProcess": "16 "
    }, {
        "Name": "Radeon HD 7990", "Brand": "AMD", "GPU": "Malta",
        "LaunchDate": "2013-04-24", "LaunchPrice": "7999", "DirectX": "11.1",
        "CoreClock": "950", "BoostClock": "1000 ", "SP": "2048", "ShaderClock": "1000 ",
        "MemSize": "3072", "MemType": "DDR5", "MemInterface": "384", "MemClock": "6000",
        "EXPIndex": "109.0 ", "TBP": "375 ", "Review": "25050",
        "DieSize": "365 ", "TCount": "8625", "MProcess": "28"
    }, {
        "Name": "GeForce GTX TITAN BLACK", "Brand": "NVIDIA", "GPU": "GK110",
        "LaunchDate": "2014-03-26", "LaunchPrice": "8999", "DirectX": "11.1",
        "CoreClock": "889 ", "BoostClock": "980 ", "SP": "2880", "ShaderClock": "980 ",
        "MemSize": "6144", "MemType": "GDDR5", "MemInterface": "384", "MemClock": "7000",
        "EXPIndex": "107.0 ", "TBP": "250 ",
        "DieSize": "561 ", "TCount": "7100 ", "MProcess": "28 "
    }, {
        "Name": "GeForce GTX 690", "Brand": "NVIDIA", "GPU": "GK104-200",
        "LaunchDate": "2012-05-03", "LaunchPrice": "7999", "DirectX": "11.1",
        "CoreClock": "915", "BoostClock": "1019 ", "SP": "1536", "ShaderClock": "1019 ",
        "MemSize": "2048", "MemType": "DDR5", "MemInterface": "256", "MemClock": "6008",
        "EXPIndex": "107.0 ", "TBP": "300", "Review": "19374 ",
        "DieSize": "294 ", "TCount": "7000 ", "MProcess": "28 "
    }, {
        "Name": "GeForce GTX 780 Ti", "Brand": "NVIDIA", "GPU": "GK110-400",
        "LaunchDate": "2013-11-07", "LaunchPrice": "4999", "DirectX": "11.1",
        "CoreClock": "876", "BoostClock": "928 ", "SP": "2880", "ShaderClock": "928 ",
        "MemSize": "3072", "MemType": "DDR5", "MemInterface": "384", "MemClock": "7000",
        "EXPIndex": "100.0 ", "TBP": "250 ", "Review": "29296 ",
        "DieSize": "533 ", "TCount": "7100 ", "MProcess": "28 "
    }, {
        "Name": "Radeon RX 570", "Brand": "AMD", "GPU": "Polaris 20 XL",
        "LaunchDate": "2017-04-18", "LaunchPrice": "1599-1699", "DirectX": "12",
        "CoreClock": "1168 ", "BoostClock": "1244 ", "SP": "2048", "ShaderClock": "1240 ",
        "MemSize": "4096", "MemType": "GDDR5", "MemInterface": "256", "MemClock": "7000",
        "EXPIndex": "99.5 ", "TBP": "150 ",
        "DieSize": "233 ", "TCount": "5700 ", "MProcess": "14 "
    }, {
        "Name": "GeForce GTX 780 GHz", "Brand": "NVIDIA", "GPU": "GK110-300",
        "LaunchDate": "2013-10-30", "LaunchPrice": "3999", "DirectX": "11.1",
        "CoreClock": "1006", "BoostClock": "1046 ", "SP": "2304", "ShaderClock": "1046 ",
        "MemSize": "3072", "MemType": "DDR5", "MemInterface": "384", "MemClock": "6008",
        "EXPIndex": "99.0 ", "TBP": "250 ", "Review": "29089 ",
        "DieSize": "551 ", "TCount": "7100 ", "MProcess": "28 "
    }, {
        "Name": "Radeon RX 470", "Brand": "AMD", "GPU": "Elesmere",
        "LaunchDate": "2016-08-04", "LaunchPrice": "1599", "DirectX": "12",
        "CoreClock": "926 ", "BoostClock": "1206 ", "SP": "2048", "ShaderClock": "1150 ",
        "MemSize": "4096", "MemType": "GDDR5", "MemInterface": "256", "MemClock": "6600",
        "EXPIndex": "98.3 ", "TBP": "120 ", "Review": "48651 ",
        "DieSize": "233 ", "TCount": "5700 ", "MProcess": "14 "
    }, {
        "Name": "Radeon R9 390X", "Brand": "AMD", "GPU": "Grenada XT",
        "LaunchDate": "2015-06-17", "LaunchPrice": "3199", "DirectX": "12",
        "CoreClock": "1050 ", "BoostClock": "1050 ", "SP": "2816", "ShaderClock": "1050 ",
        "MemSize": "8192", "MemType": "GDDR5", "MemInterface": "512", "MemClock": "6000",
        "EXPIndex": "96.6 ", "TBP": "290 ", "Review": "41197 ",
        "DieSize": "438 ", "TCount": "6200 ", "MProcess": "28 "
    }, {
        "Name": "Radeon R9 290X", "Brand": "AMD", "GPU": "Hawaii XT",
        "LaunchDate": "2013-10-24", "LaunchPrice": "4599", "DirectX": "11.2",
        "CoreClock": "727", "BoostClock": "1000 ", "SP": "2816", "ShaderClock": "1000 ",
        "MemSize": "4096", "MemType": "DDR5", "MemInterface": "512", "MemClock": "5000",
        "EXPIndex": "95.2 ", "TBP": "290", "Review": "28830 ",
        "DieSize": "438 ", "TCount": "6200 ", "MProcess": "28 "
    }, {
        "Name": "GeForce GTX 970", "Brand": "NVIDIA", "GPU": "GP204",
        "LaunchDate": "2014-09-19", "LaunchPrice": "2499", "DirectX": "12.1",
        "CoreClock": "1050 ", "BoostClock": "1178 ", "SP": "1664", "ShaderClock": "1178 ",
        "MemSize": "3584", "MemType": "GDDR5", "MemInterface": "224", "MemClock": "7000",
        "EXPIndex": "92.3 ", "TBP": "145 ", "Review": "36103 ",
        "DieSize": "398 ", "TCount": "5200 ", "MProcess": "28 "
    }, {
        "Name": "Radeon R9 390", "Brand": "AMD", "GPU": "Grenada",
        "LaunchDate": "2015-06-17", "LaunchPrice": "2599", "DirectX": "12",
        "CoreClock": "1000 ", "BoostClock": "1000 ", "SP": "2560", "ShaderClock": "1000 ",
        "MemSize": "8192", "MemType": "GDDR5", "MemInterface": "512", "MemClock": "6000",
        "EXPIndex": "92.1 ", "TBP": "275 ", "Review": "41465 ",
        "DieSize": "438 ", "TCount": "6200 ", "MProcess": "28 "
    }, {
        "Name": "GeForce GTX TITAN", "Brand": "NVIDIA", "GPU": "GK110-425",
        "LaunchDate": "2013-02-19", "LaunchPrice": "7999", "DirectX": "11.1",
        "CoreClock": "837", "BoostClock": "876 ", "SP": "2688", "ShaderClock": "876 ",
        "MemSize": "6144", "MemType": "DDR5", "MemInterface": "384", "MemClock": "6008",
        "EXPIndex": "91.0 ", "TBP": "250 ", "Review": "23878 ",
        "DieSize": "561 ", "TCount": "7100 ", "MProcess": "28 "
    }, {
        "Name": "Radeon RX 470D", "Brand": "AMD", "GPU": "Elesmere",
        "LaunchDate": "2016-10-21", "LaunchPrice": "1299", "DirectX": "12",
        "CoreClock": "926 ", "BoostClock": "1206 ", "SP": "1792",
        "MemSize": "4096", "MemType": "GDDR5", "MemInterface": "128", "MemClock": "6600",
        "EXPIndex": "89.2 ", "TBP": "110 ", "Review": "50458 ",
        "DieSize": "233 ", "TCount": "5700 ", "MProcess": "14 "
    }, {
        "Name": "Radeon R9 290", "Brand": "AMD", "GPU": "Hawaii Pro",
        "LaunchDate": "2013-10-24", "LaunchPrice": "3299-3599", "DirectX": "11.2",
        "CoreClock": "727", "BoostClock": "947 ", "SP": "2560", "ShaderClock": "947 ",
        "MemSize": "4096", "MemType": "DDR5", "MemInterface": "512", "MemClock": "5000",
        "EXPIndex": "87.0 ", "TBP": "275", "Review": "29245 ",
        "DieSize": "432 ", "TCount": "6200 ", "MProcess": "28 "
    }, {
        "Name": "GeForce GTX 780", "Brand": "NVIDIA", "GPU": "GK110-300",
        "LaunchDate": "2013-05-23", "LaunchPrice": "4799", "DirectX": "11.1",
        "CoreClock": "863", "BoostClock": "902 ", "SP": "2304", "ShaderClock": "902 ",
        "MemSize": "3072", "MemType": "DDR5", "MemInterface": "384", "MemClock": "6008",
        "EXPIndex": "86.0 ", "TBP": "250 ", "Review": "25700 ",
        "DieSize": "561 ", "TCount": "7100 ", "MProcess": "28 "
    }, {
        "Name": "Radeon R9 380X", "Brand": "AMD", "GPU": "Antigua",
        "LaunchDate": "2015-11-19", "LaunchPrice": "1799-1899", "DirectX": "12",
        "CoreClock": "970 ", "BoostClock": "970 ", "SP": "2048", "ShaderClock": "970 ",
        "MemSize": "4096", "MemType": "GDDR5", "MemInterface": "256", "MemClock": "5700",
        "EXPIndex": "77.2 ", "TBP": "190 ", "Review": "44060 ",
        "DieSize": "366 ", "TCount": "5000 ", "MProcess": "28 "
    }, {
        "Name": "Radeon R9 280X", "Brand": "AMD", "GPU": "Tahiti XTL",
        "LaunchDate": "2013-10-15", "LaunchPrice": "1699-2099", "DirectX": "11.2",
        "CoreClock": "850", "BoostClock": "1000 ", "SP": "2048", "ShaderClock": "1000 ",
        "MemSize": "3072", "MemType": "DDR5", "MemInterface": "384", "MemClock": "6000",
        "EXPIndex": "74.7 ", "TBP": "250", "Review": "28805 ",
        "DieSize": "352 ", "TCount": "4313 ", "MProcess": "28 "
    }, {
        "Name": "GeForce GTX 770", "Brand": "NVIDIA", "GPU": "GK104-425",
        "LaunchDate": "2013-05-30", "LaunchPrice": "2999", "DirectX": "11.1",
        "CoreClock": "1046", "BoostClock": "1085 ", "SP": "1536", "ShaderClock": "1085 ",
        "MemSize": "2048", "MemType": "DDR5", "MemInterface": "256", "MemClock": "7000",
        "EXPIndex": "74.0 ", "TBP": "230", "Review": "25861 ",
        "DieSize": "294 ", "TCount": "3500 ", "MProcess": "28 "
    }, {
        "Name": "Radeon R9 380", "Brand": "AMD", "GPU": "Antigua",
        "LaunchDate": "2015-06-17", "LaunchPrice": "1549-1649", "DirectX": "12",
        "CoreClock": "970 ", "BoostClock": "970 ", "SP": "1792", "ShaderClock": "933 ",
        "MemSize": "4096", "MemType": "GDDR5", "MemInterface": "256", "MemClock": "5700",
        "EXPIndex": "73.2 ", "TBP": "190 ", "Review": "41197 ",
        "DieSize": "366 ", "TCount": "5000 ", "MProcess": "28 "
    }, {
        "Name": "Radeon R9 285", "Brand": "AMD", "GPU": "Tonaga/GCN 1.2",
        "LaunchDate": "2014-09-02", "LaunchPrice": "1799-1899", "DirectX": "12",
        "CoreClock": "918 ", "BoostClock": "1375 ", "SP": "1792", "ShaderClock": "918 ",
        "MemSize": "2048", "MemType": "GDDR5", "MemInterface": "256", "MemClock": "5500",
        "EXPIndex": "72.5 ", "TBP": "190 ", "Review": "35766 ",
        "DieSize": "359 ", "TCount": "5000 ", "MProcess": "28 "
    }, {
        "Name": "GeForce GTX 1050 Ti", "Brand": "NVIDIA", "GPU": "GP107",
        "LaunchDate": "2016-10-18", "LaunchPrice": "1199", "DirectX": "12.1",
        "CoreClock": "1290 ", "BoostClock": "1392 ", "SP": "768", "ShaderClock": "1580 ",
        "MemSize": "4096", "MemType": "GDDR5", "MemInterface": "128", "MemClock": "7000",
        "EXPIndex": "70.1 ", "TBP": "75 ", "Review": "50183 ",
        "DieSize": "132 ", "TCount": "3300 ", "MProcess": "14 "
    }, {
        "Name": "GeForce GTX 960", "Brand": "NVIDIA", "GPU": "GM206",
        "LaunchDate": "2015-01-22", "LaunchPrice": "1499", "DirectX": "12.1",
        "CoreClock": "1127 ", "BoostClock": "1178 ", "SP": "1024", "ShaderClock": "1178 ",
        "MemSize": "2048", "MemType": "GDDR5", "MemInterface": "128", "MemClock": "7000",
        "EXPIndex": "68.8 ", "TBP": "120 ", "Review": "38451 ",
        "DieSize": "224 ", "TCount": "2940 ", "MProcess": "28 "
    }, {
        "Name": "GeForce GTX 1050", "Brand": "NVIDIA", "GPU": "GP107",
        "LaunchDate": "2016-10-26", "LaunchPrice": "899", "DirectX": "12.1",
        "CoreClock": "1354 ", "BoostClock": "1455 ", "SP": "640", "ShaderClock": "1600 ",
        "MemSize": "2048", "MemType": "GDDR5", "MemInterface": "128", "MemClock": "7000",
        "EXPIndex": "58.9 ", "TBP": "75 ", "Review": "50183 ",
        "DieSize": "132 ", "TCount": "3300 ", "MProcess": "14 "
    }, {
        "Name": "Radeon RX 560", "Brand": "AMD", "GPU": "Polaris 21",
        "LaunchDate": "2017-05-17", "LaunchPrice": "799-999", "DirectX": "12",
        "CoreClock": "1175 ", "BoostClock": "1275 ", "SP": "1024", "ShaderClock": "1130 ",
        "MemSize": "4096", "MemType": "GDDR5", "MemInterface": "128", "MemClock": "7000",
        "EXPIndex": "56.5 ", "TBP": "80 ", "Review": "54216 ",
        "DieSize": "123 ", "TCount": "3000 ", "MProcess": "14 "
    }, {
        "Name": "Radeon R9 370X", "Brand": "AMD", "GPU": "Trinidad XT",
        "LaunchDate": "2015-08-27", "LaunchPrice": "1199", "DirectX": "11.1",
        "CoreClock": "1000 ", "BoostClock": "1050 ", "SP": "1280", "ShaderClock": "1080 ",
        "MemSize": "2048", "MemType": "GDDR5", "MemInterface": "256", "MemClock": "5600",
        "EXPIndex": "54.9 ", "TBP": "170 ", "Review": "42126 ",
        "DieSize": "212 ", "TCount": "2800 ", "MProcess": "28 "
    }, {
        "Name": "Radeon R9 270", "Brand": "AMD", "GPU": "Pictairn XT",
        "LaunchDate": "2013-12-02", "LaunchPrice": "1099-1299", "DirectX": "11.2",
        "CoreClock": "900", "BoostClock": "925 ", "SP": "1024", "ShaderClock": "925 ",
        "MemSize": "2048", "MemType": "DDR5", "MemInterface": "256", "MemClock": "4800",
        "EXPIndex": "53.0 ", "TBP": "150",
        "DieSize": "212 ", "TCount": "2800 ", "MProcess": "28 "
    }, {
        "Name": "Radeon RX 560D", "Brand": "AMD", "GPU": "Baffin",
        "LaunchDate": "2017-08-08", "LaunchPrice": "899", "DirectX": "12",
        "CoreClock": "1175 ", "BoostClock": "1275 ", "SP": "896", "ShaderClock": "1175 ",
        "MemSize": "4096", "MemType": "GDDR5", "MemInterface": "128", "MemClock": "6000",
        "EXPIndex": "52.7 ", "TBP": "75 ", "Review": "56864 ",
        "DieSize": "123 ", "TCount": "3000 ", "MProcess": "14 "
    }, {
        "Name": "Radeon RX 460", "Brand": "AMD", "GPU": "Baffin",
        "LaunchDate": "2016-08-08", "LaunchPrice": "999", "DirectX": "12",
        "CoreClock": "1090 ", "BoostClock": "1200 ", "SP": "896", "ShaderClock": "1120 ",
        "MemSize": "4096", "MemType": "GDDR5", "MemInterface": "128", "MemClock": "7000",
        "EXPIndex": "51.1 ", "TBP": "75 ", "Review": "48716 ",
        "DieSize": "123 ", "TCount": "3000 ", "MProcess": "14 "
    }, {
        "Name": "Radeon HD 7970 GE", "Brand": "AMD", "GPU": "Tahiti XT",
        "LaunchDate": "2013-06-22", "LaunchPrice": "4599", "DirectX": "11.1",
        "CoreClock": "1000", "BoostClock": "1050 ", "SP": "2048", "ShaderClock": "1050 ",
        "MemSize": "3072", "MemType": "DDR5", "MemInterface": "384", "MemClock": "6000",
        "EXPIndex": "72.0 ", "TBP": "250", "Review": "18129 ",
        "DieSize": "352 ", "TCount": "4313 ", "MProcess": "28 "
    }, {
        "Name": "GeForce GTX 680", "Brand": "NVIDIA", "GPU": "GK104-400",
        "LaunchDate": "2012-03-22", "LaunchPrice": "3999", "DirectX": "11.1",
        "CoreClock": "1006", "BoostClock": "1058 ", "SP": "1536", "ShaderClock": "1058 ",
        "MemSize": "2048", "MemType": "DDR5", "MemInterface": "256", "MemClock": "6008",
        "EXPIndex": "72.0 ", "TBP": "195", "Review": "18845 ",
        "DieSize": "294 ", "TCount": "3500 ", "MProcess": "28 "
    }, {
        "Name": "GeForce GTX 590", "Brand": "NVIDIA", "GPU": "GF110-351",
        "LaunchDate": "2011-03-24", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "607", "BoostClock": "607 ", "SP": "512", "ShaderClock": "1214 ",
        "MemSize": "1536", "MemType": "DDR5", "MemInterface": "384", "MemClock": "3420",
        "EXPIndex": "67.2 ", "TBP": "365", "Review": "14447 ",
        "DieSize": "529 ", "TCount": "6000 ", "MProcess": "40 "
    }, {
        "Name": "GeForce GTX 670", "Brand": "NVIDIA", "GPU": "GK104-325",
        "LaunchDate": "2012-05-10", "LaunchPrice": "3199", "DirectX": "11.1",
        "CoreClock": "915", "BoostClock": "980 ", "SP": "1344", "ShaderClock": "980 ",
        "MemSize": "2048", "MemType": "DDR5", "MemInterface": "256", "MemClock": "6008",
        "EXPIndex": "67.0 ", "TBP": "170", "Review": "19458 ",
        "DieSize": "294 ", "TCount": "3500 ", "MProcess": "28 "
    }, {
        "Name": "Radeon HD 7970", "Brand": "AMD", "GPU": "Tahiti XT",
        "LaunchDate": "2013-01-09", "LaunchPrice": "4299", "DirectX": "11.1",
        "CoreClock": "925", "BoostClock": "925 ", "SP": "2048", "ShaderClock": "925 ",
        "MemSize": "3072", "MemType": "DDR5", "MemInterface": "384", "MemClock": "5500",
        "EXPIndex": "66.0 ", "TBP": "250", "Review": "18129 ",
        "DieSize": "365 ", "TCount": "4313 ", "MProcess": "28 "
    }, {
        "Name": "Radeon HD 7950 Boost", "Brand": "AMD", "GPU": "Tahiti Pro",
        "LaunchDate": "2013-06-22", "LaunchPrice": "3299", "DirectX": "11.1",
        "CoreClock": "850", "BoostClock": "925 ", "SP": "1792", "ShaderClock": "925 ",
        "MemSize": "3072", "MemType": "DDR5", "MemInterface": "384", "MemClock": "5000",
        "EXPIndex": "63.0 ", "TBP": "200", "Review": "18254 ",
        "DieSize": "352 ", "TCount": "4313 ", "MProcess": "28 "
    }, {
        "Name": "GeForce GTX 760", "Brand": "NVIDIA", "GPU": "GK104-225",
        "LaunchDate": "2013-06-25", "LaunchPrice": "1799", "DirectX": "11.1",
        "CoreClock": "980", "BoostClock": "1033 ", "SP": "1152", "ShaderClock": "1033 ",
        "MemSize": "2048", "MemType": "DDR5", "MemInterface": "256", "MemClock": "6008",
        "EXPIndex": "62.0 ", "TBP": "170", "Review": "26301 ",
        "DieSize": "294 ", "TCount": "3500 ", "MProcess": "28 "
    }, {
        "Name": "Radeon HD 6990", "Brand": "AMD", "GPU": "Cayman XT",
        "LaunchDate": "2011-03-08", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "830", "BoostClock": "830 ", "SP": "1536", "ShaderClock": "830 ",
        "MemSize": "2048", "MemType": "DDR5", "MemInterface": "256", "MemClock": "5000",
        "EXPIndex": "61.6 ", "TBP": "375", "Review": "14184 ",
        "DieSize": "389 ", "TCount": "5280 ", "MProcess": "40 "
    }, {
        "Name": "GeForce GTX 660 Ti", "Brand": "NVIDIA", "GPU": "GK10-300",
        "LaunchDate": "2012-08-16", "LaunchPrice": "2299", "DirectX": "11.1",
        "CoreClock": "915", "BoostClock": "980 ", "SP": "1344", "ShaderClock": "980 ",
        "MemSize": "2048", "MemType": "DDR5", "MemInterface": "192", "MemClock": "6008",
        "EXPIndex": "59.0 ", "TBP": "150", "Review": "20807 ",
        "DieSize": "294 ", "TCount": "3500 ", "MProcess": "28 "
    }, {
        "Name": "Radeon HD 5970", "Brand": "AMD", "GPU": "Hemlock",
        "LaunchDate": "2009-07-11", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "725", "BoostClock": "725 ", "SP": "1600", "ShaderClock": "725 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "256", "MemClock": "4000",
        "EXPIndex": "59.0 ", "TBP": "295", "Review": "9031 ",
        "DieSize": "338 ", "TCount": "4300 ", "MProcess": "40 "
    }, {
        "Name": "Radeon HD 7950", "Brand": "AMD", "GPU": "Tahiti Pro",
        "LaunchDate": "2013-02-07", "LaunchPrice": "3399-3699", "DirectX": "11.1",
        "CoreClock": "800", "BoostClock": "800 ", "SP": "1792", "ShaderClock": "800 ",
        "MemSize": "3072", "MemType": "DDR5", "MemInterface": "384", "MemClock": "5000",
        "EXPIndex": "57.0 ", "TBP": "200", "Review": "18254 ",
        "DieSize": "365 ", "TCount": "4313 ", "MProcess": "28 "
    }, {
        "Name": "Radeon R9 270X", "Brand": "AMD", "GPU": "Pictairn XT",
        "LaunchDate": "2013-10-15", "LaunchPrice": "1399-1599", "DirectX": "11.2",
        "CoreClock": "1000", "BoostClock": "1050 ", "SP": "1280", "ShaderClock": "1050 ",
        "MemSize": "2048", "MemType": "DDR5", "MemInterface": "256", "MemClock": "5600",
        "EXPIndex": "56.0 ", "TBP": "180", "Review": "28805 ",
        "DieSize": "212 ", "TCount": "2800 ", "MProcess": "28 "
    }, {
        "Name": "GeForce GTX 580", "Brand": "NVIDIA", "GPU": "GF110-375",
        "LaunchDate": "2010-11-09", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "772", "BoostClock": "772 ", "SP": "512", "ShaderClock": "1544 ",
        "MemSize": "1536", "MemType": "DDR5", "MemInterface": "384", "MemClock": "4008",
        "EXPIndex": "51.7 ", "TBP": "244", "Review": "12642 ",
        "DieSize": "529 ", "TCount": "3000 ", "MProcess": "40 "
    }, {
        "Name": "Radeon HD 7870", "Brand": "AMD", "GPU": "Pictairn XT",
        "LaunchDate": "2012-03-19", "LaunchPrice": "2699-2999", "DirectX": "11.1",
        "CoreClock": "1000", "BoostClock": "1000 ", "SP": "1280", "ShaderClock": "1000 ",
        "MemSize": "2048", "MemType": "DDR5", "MemInterface": "256", "MemClock": "4800",
        "EXPIndex": "51.0 ", "TBP": "175", "Review": "18933 ",
        "DieSize": "212 ", "TCount": "2800 ", "MProcess": "28 "
    }, {
        "Name": "GeForce GTX 660", "Brand": "NVIDIA", "GPU": "GK106-400",
        "LaunchDate": "2012-09-13", "LaunchPrice": "1799", "DirectX": "11.1",
        "CoreClock": "980", "BoostClock": "1033 ", "SP": "960", "ShaderClock": "1033 ",
        "MemSize": "2048", "MemType": "DDR5", "MemInterface": "192", "MemClock": "6008",
        "EXPIndex": "51.0 ", "TBP": "140", "Review": "21251 ",
        "DieSize": "221 ", "TCount": "2540 ", "MProcess": "28 "
    }, {
        "Name": "GeForce GTX 950", "Brand": "NVIDIA", "GPU": "GM206",
        "LaunchDate": "2015-08-20", "LaunchPrice": "1199", "DirectX": "12.1",
        "CoreClock": "1024 ", "BoostClock": "1188 ", "SP": "768", "ShaderClock": "1188 ",
        "MemSize": "2048", "MemType": "GDDR5", "MemInterface": "128", "MemClock": "6600",
        "EXPIndex": "50.9 ", "TBP": "90 ", "Review": "42530 ",
        "DieSize": "224 ", "TCount": "2940 ", "MProcess": "28 "
    }, {
        "Name": "GeForce GTX 570", "Brand": "NVIDIA", "GPU": "GF110-275",
        "LaunchDate": "2010-12-07", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "732", "BoostClock": "732 ", "SP": "480", "ShaderClock": "1464 ",
        "MemSize": "1280", "MemType": "DDR5", "MemInterface": "320", "MemClock": "3800",
        "EXPIndex": "46.4 ", "TBP": "219", "Review": "12957 ",
        "DieSize": "529 ", "TCount": "3000 ", "MProcess": "40 "
    }, {
        "Name": "GeForce GTX 295", "Brand": "NVIDIA", "GPU": "G200-400",
        "LaunchDate": "2009-01-08", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "576", "BoostClock": "576 ", "SP": "240", "ShaderClock": "1242 ",
        "MemSize": "896", "MemType": "DDR3", "MemInterface": "448", "MemClock": "2000",
        "EXPIndex": "45.5 ", "TBP": "289", "Review": "6065 ",
        "DieSize": "470 ", "TCount": "2800 ", "MProcess": "55 "
    }, {
        "Name": "Radeon HD 7850", "Brand": "AMD", "GPU": "Pictairn Pro",
        "LaunchDate": "2012-03-19", "LaunchPrice": "249美", "DirectX": "11.1",
        "CoreClock": "860", "BoostClock": "860 ", "SP": "1024", "ShaderClock": "860 ",
        "MemSize": "2048", "MemType": "DDR5", "MemInterface": "256", "MemClock": "4800",
        "EXPIndex": "45.3 ", "TBP": "130", "Review": "20314 ",
        "DieSize": "212 ", "TCount": "2800 ", "MProcess": "28 "
    }, {
        "Name": "GeForce GTX 480", "Brand": "NVIDIA", "GPU": "GF110-375",
        "LaunchDate": "2010-03-27", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "700", "BoostClock": "700 ", "SP": "480", "ShaderClock": "1400 ",
        "MemSize": "1536", "MemType": "DDR5", "MemInterface": "384", "MemClock": "3696",
        "EXPIndex": "45.3 ", "TBP": "250", "Review": "9944 ",
        "DieSize": "529 ", "TCount": "3000 ", "MProcess": "40 "
    }, {
        "Name": "GTX 650 Ti Boost", "Brand": "NVIDIA", "GPU": "GK106-240",
        "LaunchDate": "2013-03-26", "LaunchPrice": "1249", "DirectX": "11.1",
        "CoreClock": "980", "BoostClock": "1033 ", "SP": "768", "ShaderClock": "1033 ",
        "MemSize": "2048", "MemType": "DDR5", "MemInterface": "192", "MemClock": "6008",
        "EXPIndex": "45.0 ", "TBP": "140", "Review": "24485 ",
        "DieSize": "221 ", "TCount": "2540 ", "MProcess": "28 "
    }, {
        "Name": "Radeon R9 370", "Brand": "AMD", "GPU": "Trinidad",
        "LaunchDate": "2015-06-17", "LaunchPrice": "1099", "DirectX": "11.1",
        "CoreClock": "975 ", "BoostClock": "1000 ", "SP": "1024", "ShaderClock": "975 ",
        "MemSize": "2048", "MemType": "GDDR5", "MemInterface": "256", "MemClock": "5700",
        "EXPIndex": "44.2 ", "TBP": "145 ", "Review": "41683 ",
        "DieSize": "212 ", "TCount": "2800 ", "MProcess": "28 "
    }, {
        "Name": "GeForce GTX 950 low power", "Brand": "NVIDIA", "GPU": "GP206",
        "LaunchDate": "2016-04-01", "LaunchPrice": "1099", "DirectX": "12.1",
        "CoreClock": "1024 ", "BoostClock": "1188 ", "SP": "768", "ShaderClock": "1150 ",
        "MemSize": "2048", "MemType": "GDDR5", "MemInterface": "128", "MemClock": "6600",
        "EXPIndex": "45.0 ", "TBP": "75 ",
        "DieSize": "228 ", "TCount": "2940 ", "MProcess": "28 "
    }, {
        "Name": "GTX 560 Ti 448C", "Brand": "NVIDIA", "GPU": "GF110-270",
        "LaunchDate": "2011-11-29", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "732", "BoostClock": "732 ", "SP": "448", "ShaderClock": "1464 ",
        "MemSize": "1280", "MemType": "DDR5", "MemInterface": "320", "MemClock": "3800",
        "EXPIndex": "44.8 ", "TBP": "210",
        "DieSize": "529 ", "TCount": "3000 ", "MProcess": "40 "
    }, {
        "Name": "Radeon R7 265", "Brand": "AMD", "GPU": "Pitcairn Pro",
        "LaunchDate": "2014-02-12", "LaunchPrice": "999", "DirectX": "11.1",
        "CoreClock": "900 ", "BoostClock": "925 ", "SP": "1024", "ShaderClock": "925 ",
        "MemSize": "2048", "MemType": "GDDR5", "MemInterface": "256", "MemClock": "5600",
        "EXPIndex": "42.6 ", "TBP": "150 ",
        "DieSize": "212 ", "TCount": "2800 ", "MProcess": "28 "
    }, {
        "Name": "Radeon HD 6970", "Brand": "AMD", "GPU": "Cayman XT",
        "LaunchDate": "2010-12-15", "LaunchPrice": "2699-2999", "DirectX": "11",
        "CoreClock": "880", "BoostClock": "880 ", "SP": "1536", "ShaderClock": "880 ",
        "MemSize": "2048", "MemType": "DDR5", "MemInterface": "256", "MemClock": "5500",
        "EXPIndex": "42.5 ", "TBP": "250", "Review": "13051 ",
        "DieSize": "389 ", "TCount": "2640 ", "MProcess": "40 "
    }, {
        "Name": "GeForce GTX 750 Ti", "Brand": "NVIDIA", "GPU": "GM107",
        "LaunchDate": "2014-02-18", "LaunchPrice": "999", "DirectX": "12",
        "CoreClock": "1020 ", "BoostClock": "1085 ", "SP": "640", "ShaderClock": "1085 ",
        "MemSize": "2048", "MemType": "GDDR5", "MemInterface": "128", "MemClock": "5400",
        "EXPIndex": "42.5 ", "TBP": "60 ", "Review": "31499 ",
        "DieSize": "148 ", "TCount": "1870 ", "MProcess": "28 "
    }, {
        "Name": "GeForce GTX 560 Ti", "Brand": "NVIDIA", "GPU": "GF114-400",
        "LaunchDate": "2011-01-25", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "822", "BoostClock": "822 ", "SP": "384", "ShaderClock": "1644 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "256", "MemClock": "4000",
        "EXPIndex": "39.0 ", "TBP": "170", "Review": "13590 ",
        "DieSize": "332 ", "TCount": "1950 ", "MProcess": "40 "
    }, {
        "Name": "GeForce GTX 750", "Brand": "NVIDIA", "GPU": "GM107",
        "LaunchDate": "2014-02-18", "LaunchPrice": "799", "DirectX": "12",
        "CoreClock": "1020 ", "BoostClock": "1085 ", "SP": "512", "ShaderClock": "1085 ",
        "MemSize": "1024", "MemType": "GDDR5", "MemInterface": "128", "MemClock": "5400",
        "EXPIndex": "38.6 ", "TBP": "55 ", "Review": "31499 ",
        "DieSize": "148 ", "TCount": "1870 ", "MProcess": "28 "
    }, {
        "Name": "Radeon HD 6950", "Brand": "AMD", "GPU": "Cayman Pro",
        "LaunchDate": "2010-12-15", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "800", "BoostClock": "800 ", "SP": "1408", "ShaderClock": "800 ",
        "MemSize": "2048", "MemType": "DDR5", "MemInterface": "256", "MemClock": "5000",
        "EXPIndex": "38.2 ", "TBP": "200", "Review": "13051 ",
        "DieSize": "389 ", "TCount": "2640 ", "MProcess": "40 "
    }, {
        "Name": "GeForce GTX 285", "Brand": "NVIDIA", "GPU": "G200-350",
        "LaunchDate": "2009-02-01", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "648", "BoostClock": "648 ", "SP": "240", "ShaderClock": "1476 ",
        "MemSize": "1024", "MemType": "DDR3", "MemInterface": "512", "MemClock": "2484",
        "EXPIndex": "37.7 ", "TBP": "183", "Review": "6238 ",
        "DieSize": "470 ", "TCount": "1400 ", "MProcess": "55 "
    }, {
        "Name": "GeForce GTX 470", "Brand": "NVIDIA", "GPU": "GF100-275",
        "LaunchDate": "2010-03-27", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "607", "BoostClock": "607 ", "SP": "448", "ShaderClock": "1214 ",
        "MemSize": "1280", "MemType": "DDR5", "MemInterface": "320", "MemClock": "3348",
        "EXPIndex": "37.4 ", "TBP": "215", "Review": "9944 ",
        "DieSize": "529 ", "TCount": "3000 ", "MProcess": "40 "
    }, {
        "Name": "Radeon R7 260X", "Brand": "AMD", "GPU": "Bonaire",
        "LaunchDate": "2013-10-15", "LaunchPrice": "999-1099", "DirectX": "11.2",
        "CoreClock": "1000", "BoostClock": "1100 ", "SP": "896", "ShaderClock": "1100 ",
        "MemSize": "2048", "MemType": "DDR5", "MemInterface": "128", "MemClock": "6500",
        "EXPIndex": "37.0 ", "TBP": "115", "Review": "28805 ",
        "DieSize": "160 ", "TCount": "2080 ", "MProcess": "28 "
    }, {
        "Name": "Radeon HD 7790", "Brand": "AMD", "GPU": "Bonaire",
        "LaunchDate": "2013-03-22", "LaunchPrice": "149美", "DirectX": "11.1",
        "CoreClock": "1000", "BoostClock": "1000 ", "SP": "896", "ShaderClock": "1000 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "128", "MemClock": "6000",
        "EXPIndex": "36.7 ", "TBP": "85",
        "DieSize": "160 ", "TCount": "2080 ", "MProcess": "28 "
    }, {
        "Name": "Radeon HD 4870X2", "Brand": "AMD", "GPU": "RV770 XT",
        "LaunchDate": "2008-08-12", "LaunchPrice": "0", "DirectX": "10.1",
        "CoreClock": "750", "BoostClock": "750 ", "SP": "800", "ShaderClock": "750 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "256", "MemClock": "3600",
        "EXPIndex": "36.5 ", "TBP": "286",
        "DieSize": "260 ", "TCount": "1912 ", "MProcess": "55 "
    }, {
        "Name": "HD 5870 Eyefinity 6", "Brand": "AMD", "GPU": "Cypress XT",
        "LaunchDate": "2010-03-11", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "850", "BoostClock": "850 ", "SP": "1600", "ShaderClock": "850 ",
        "MemSize": "2048", "MemType": "DDR5", "MemInterface": "256", "MemClock": "4800",
        "EXPIndex": "36.3 ", "TBP": "188",
        "DieSize": "338 ", "TCount": "2150 ", "MProcess": "40 "
    }, {
        "Name": "Radeon HD 5870", "Brand": "AMD", "GPU": "Cypress XT",
        "LaunchDate": "2009-11-12", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "850", "BoostClock": "850 ", "SP": "1600", "ShaderClock": "850 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "256", "MemClock": "4800",
        "EXPIndex": "36.3 ", "TBP": "188", "Review": "8888 ",
        "DieSize": "338 ", "TCount": "2150 ", "MProcess": "40 "
    }, {
        "Name": "GeForce GTX 275", "Brand": "NVIDIA", "GPU": "G200-105",
        "LaunchDate": "2009-04-02", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "633", "BoostClock": "633 ", "SP": "240", "ShaderClock": "1404 ",
        "MemSize": "896", "MemType": "DDR3", "MemInterface": "448", "MemClock": "2328",
        "EXPIndex": "36.0 ", "TBP": "219", "Review": "6822 ",
        "DieSize": "470 ", "TCount": "1400 ", "MProcess": "55 "
    }, {
        "Name": "Radeon HD 6930", "Brand": "AMD", "GPU": "Cayman",
        "LaunchDate": "2011-12-20", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "750", "BoostClock": "750 ", "SP": "1280", "ShaderClock": "750 ",
        "MemSize": "2048", "MemType": "DDR5", "MemInterface": "256", "MemClock": "4800",
        "EXPIndex": "35.7 ", "TBP": "186", "Review": "17929 ",
        "DieSize": "389 ", "TCount": "2640 ", "MProcess": "40 "
    }, {
        "Name": "GeForce 9800GX2", "Brand": "NVIDIA", "GPU": "G92-450",
        "LaunchDate": "2008-03-18", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "600", "BoostClock": "600 ", "SP": "128", "ShaderClock": "1500 ",
        "MemSize": "512", "MemType": "DDR3", "MemInterface": "256", "MemClock": "2000",
        "EXPIndex": "35.5 ", "TBP": "197", "Review": "3494 ",
        "DieSize": "334 ", "TCount": "1508 ", "MProcess": "65 "
    }, {
        "Name": "Radeon HD 4850X2", "Brand": "AMD", "GPU": "RV770 Pro",
        "LaunchDate": "2008-11-03", "LaunchPrice": "0", "DirectX": "10.1",
        "CoreClock": "625", "BoostClock": "625 ", "SP": "800", "ShaderClock": "625 ",
        "MemSize": "512", "MemType": "DDR3", "MemInterface": "256", "MemClock": "2000",
        "EXPIndex": "35.0 ", "TBP": "250",
        "DieSize": "260 ", "TCount": "1912 ", "MProcess": "55 "
    }, {
        "Name": "GeForce GTX 280", "Brand": "NVIDIA", "GPU": "G200-300",
        "LaunchDate": "2008-06-17", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "602", "BoostClock": "602 ", "SP": "240", "ShaderClock": "1296 ",
        "MemSize": "1024", "MemType": "DDR3", "MemInterface": "512", "MemClock": "2214",
        "EXPIndex": "35.0 ", "TBP": "236",
        "DieSize": "576 ", "TCount": "1400 ", "MProcess": "65 "
    }, {
        "Name": "GeForce GTX 560", "Brand": "NVIDIA", "GPU": "GF114-325",
        "LaunchDate": "2011-05-17", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "810", "BoostClock": "810 ", "SP": "336", "ShaderClock": "1620 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "256", "MemClock": "4008",
        "EXPIndex": "34.5 ", "TBP": "150", "Review": "15283 ",
        "DieSize": "332 ", "TCount": "1950 ", "MProcess": "40 "
    }, {
        "Name": "Radeon RX 550", "Brand": "AMD", "GPU": "Polaris 12",
        "LaunchDate": "2017-04-20", "LaunchPrice": "599-799", "DirectX": "12",
        "CoreClock": "1100 ", "BoostClock": "1183 ", "SP": "512", "ShaderClock": "1130 ",
        "MemSize": "4096", "MemType": "GDDR5", "MemInterface": "128", "MemClock": "7000",
        "EXPIndex": "34.2 ", "TBP": "50 ",
        "DieSize": "101 ", "TCount": "2200 ", "MProcess": "14 "
    }, {
        "Name": "GeForce GTX 650 Ti", "Brand": "NVIDIA", "GPU": "GK106-220",
        "LaunchDate": "2012-10-09", "LaunchPrice": "1099", "DirectX": "11.1",
        "CoreClock": "925", "BoostClock": "925 ", "SP": "768", "ShaderClock": "925 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "128", "MemClock": "5400",
        "EXPIndex": "34.0 ", "TBP": "110", "Review": "21520 ",
        "DieSize": "221 ", "TCount": "2540 ", "MProcess": "28 "
    }, {
        "Name": "Radeon HD 6870", "Brand": "AMD", "GPU": "Barts XT",
        "LaunchDate": "2010-10-22", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "900", "BoostClock": "900 ", "SP": "1120", "ShaderClock": "900 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "256", "MemClock": "4200",
        "EXPIndex": "33.9 ", "TBP": "151", "Review": "12436 ",
        "DieSize": "255 ", "TCount": "1700 ", "MProcess": "40 "
    }, {
        "Name": "Radeon HD 4890", "Brand": "AMD", "GPU": "RV790",
        "LaunchDate": "2009-04-01", "LaunchPrice": "0", "DirectX": "10.1",
        "CoreClock": "850", "BoostClock": "850 ", "SP": "800", "ShaderClock": "850 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "256", "MemClock": "3900",
        "EXPIndex": "33.9 ", "TBP": "190", "Review": "6808 ",
        "DieSize": "282 ", "TCount": "959 ", "MProcess": "55 "
    }, {
        "Name": "Radeon HD 5850", "Brand": "AMD", "GPU": "Cypress Pro",
        "LaunchDate": "2009-11-12", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "725", "BoostClock": "725 ", "SP": "1440", "ShaderClock": "725 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "256", "MemClock": "4000",
        "EXPIndex": "33.4 ", "TBP": "170", "Review": "8888 ",
        "DieSize": "338 ", "TCount": "2150 ", "MProcess": "40 "
    }, {
        "Name": "GeForce GT 1030", "Brand": "NVIDIA", "GPU": "GP108",
        "LaunchDate": "2017-05-17", "LaunchPrice": "599", "DirectX": "12.1",
        "CoreClock": "1228 ", "BoostClock": "1468 ", "SP": "384", "ShaderClock": "1450 ",
        "MemSize": "2048", "MemType": "GDDR5", "MemInterface": "64", "MemClock": "6000",
        "EXPIndex": "32.2 ", "TBP": "30 ", "Review": "54182 ",
        "DieSize": "~100", "TCount": "~2500", "MProcess": "14 "
    }, {
        "Name": "GTX 260 Core216", "Brand": "NVIDIA", "GPU": "G200-103",
        "LaunchDate": "2008-09-16", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "575", "BoostClock": "575 ", "SP": "216", "ShaderClock": "1240 ",
        "MemSize": "896", "MemType": "DDR3", "MemInterface": "448", "MemClock": "2000",
        "EXPIndex": "31.7 ", "TBP": "202",
        "DieSize": "576 ", "TCount": "1400 ", "MProcess": "65 "
    }, {
        "Name": "Radeon R7 360", "Brand": "AMD", "GPU": "Tonago",
        "LaunchDate": "2015-06-17", "LaunchPrice": "799", "DirectX": "12",
        "CoreClock": "1050 ", "BoostClock": "1050 ", "SP": "768", "ShaderClock": "1050 ",
        "MemSize": "2048", "MemType": "GDDR5", "MemInterface": "128", "MemClock": "7000",
        "EXPIndex": "31.2 ", "TBP": "100 ",
        "DieSize": "160 ", "TCount": "2080 ", "MProcess": "28 "
    }, {
        "Name": "Radeon HD3870X2", "Brand": "AMD", "GPU": "R680",
        "LaunchDate": "2008-01-26", "LaunchPrice": "449美", "DirectX": "10.1",
        "CoreClock": "850 ", "SP": "320", "ShaderClock": "850 ",
        "MemSize": "512", "MemType": "GDDR3", "MemInterface": "256", "MemClock": "1800",
        "EXPIndex": "31.1 ", "TBP": "240 ", "Review": "3337 ",
        "DieSize": "210 ", "TCount": "1332 ", "MProcess": "55 "
    }, {
        "Name": "GeForce GTX 465", "Brand": "NVIDIA", "GPU": "GF110-275",
        "LaunchDate": "2010-05-31", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "607", "BoostClock": "607 ", "SP": "352", "ShaderClock": "1215 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "256", "MemClock": "3348",
        "EXPIndex": "30.5 ", "TBP": "200", "Review": "10746 ",
        "DieSize": "529 ", "TCount": "3000 ", "MProcess": "40 "
    }, {
        "Name": "GeForce GTX 260 55", "Brand": "NVIDIA", "GPU": "G200",
        "LaunchDate": "2008-12-01", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "575", "BoostClock": "575 ", "SP": "216", "ShaderClock": "1240 ",
        "MemSize": "896", "MemType": "DDR3", "MemInterface": "448", "MemClock": "2000",
        "EXPIndex": "30.5 ", "TBP": "171",
        "DieSize": "470 ", "TCount": "1400 ", "MProcess": "55 "
    }, {
        "Name": "GeForce GTX 260", "Brand": "NVIDIA", "GPU": "G200-100",
        "LaunchDate": "2008-06-16", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "575", "BoostClock": "575 ", "SP": "192", "ShaderClock": "1240 ",
        "MemSize": "896", "MemType": "DDR3", "MemInterface": "448", "MemClock": "2000",
        "EXPIndex": "30.5 ", "TBP": "182",
        "DieSize": "576 ", "TCount": "1400 ", "MProcess": "65 "
    }, {
        "Name": "GeForce GTX 460 1GB", "Brand": "NVIDIA", "GPU": "GF104-325",
        "LaunchDate": "2010-07-12", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "675", "BoostClock": "675 ", "SP": "336", "ShaderClock": "1350 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "256", "MemClock": "3600",
        "EXPIndex": "30.0 ", "TBP": "160", "Review": "11283 ",
        "DieSize": "332 ", "TCount": "1950 ", "MProcess": "40 "
    }, {
        "Name": "Radeon R7 250X", "Brand": "AMD", "GPU": "Cape Verde XT",
        "LaunchDate": "2014-02-12", "LaunchPrice": "699", "DirectX": "11.1",
        "CoreClock": "950 ", "BoostClock": "950 ", "SP": "640", "ShaderClock": "1000 ",
        "MemSize": "1024", "MemType": "GDDR5", "MemInterface": "128", "MemClock": "4500",
        "EXPIndex": "29.6 ", "TBP": "80 ",
        "DieSize": "123 ", "TCount": "1500 ", "MProcess": "28 "
    }, {
        "Name": "Radeon HD 6850", "Brand": "AMD", "GPU": "Barts Pro",
        "LaunchDate": "2010-10-22", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "775", "BoostClock": "775 ", "SP": "960", "ShaderClock": "775 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "256", "MemClock": "4000",
        "EXPIndex": "29.6 ", "TBP": "127", "Review": "12436 ",
        "DieSize": "255 ", "TCount": "1700 ", "MProcess": "40 "
    }, {
        "Name": "Radeon HD 4870", "Brand": "AMD", "GPU": "RV770 XT",
        "LaunchDate": "2008-06-24", "LaunchPrice": "0", "DirectX": "10.1",
        "CoreClock": "750", "BoostClock": "750 ", "SP": "800", "ShaderClock": "750 ",
        "MemSize": "512", "MemType": "DDR5", "MemInterface": "256", "MemClock": "3600",
        "EXPIndex": "29.5 ", "TBP": "160", "Review": "4255 ",
        "DieSize": "260 ", "TCount": "956 ", "MProcess": "55 "
    }, {
        "Name": "GTX 460 768MB", "Brand": "NVIDIA", "GPU": "GF104-300",
        "LaunchDate": "2010-07-12", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "675", "BoostClock": "675 ", "SP": "336", "ShaderClock": "1350 ",
        "MemSize": "768", "MemType": "DDR5", "MemInterface": "192", "MemClock": "3600",
        "EXPIndex": "27.7 ", "TBP": "150", "Review": "11283 ",
        "DieSize": "332 ", "TCount": "1950 ", "MProcess": "40 "
    }, {
        "Name": "GeForce GTX 560 SE", "Brand": "NVIDIA", "GPU": "GF114-200",
        "LaunchDate": "2012-03-13", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "736", "BoostClock": "736 ", "SP": "288", "ShaderClock": "1472 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "192", "MemClock": "3828",
        "EXPIndex": "27.6 ", "TBP": "150", "Review": "18741 ",
        "DieSize": "332 ", "TCount": "1950 ", "MProcess": "40 "
    }, {
        "Name": "GeForce 9800 GTX+", "Brand": "NVIDIA", "GPU": "G92-400-B1",
        "LaunchDate": "2008-07-16", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "738", "BoostClock": "738 ", "SP": "128", "ShaderClock": "1836 ",
        "MemSize": "512", "MemType": "DDR3", "MemInterface": "256", "MemClock": "2200",
        "EXPIndex": "27.4 ", "TBP": "141", "Review": "5013 ",
        "DieSize": "296 ", "TCount": "754 ", "MProcess": "55 "
    }, {
        "Name": "Radeon HD 7770", "Brand": "AMD", "GPU": "Cape Verde XT",
        "LaunchDate": "2012-02-15", "LaunchPrice": "159美", "DirectX": "11.1",
        "CoreClock": "1000", "BoostClock": "1000 ", "SP": "640", "ShaderClock": "1000 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "128", "MemClock": "4500",
        "EXPIndex": "27.0 ", "TBP": "80", "Review": "18502 ",
        "DieSize": "123 ", "TCount": "1500 ", "MProcess": "28 "
    }, {
        "Name": "Radeon HD 3850X2", "Brand": "AMD", "GPU": "RV670",
        "LaunchDate": "2008-04-04", "LaunchPrice": "349美", "DirectX": "10.1",
        "CoreClock": "670 ", "SP": "320", "ShaderClock": "670 ",
        "MemSize": "512", "MemType": "GDDR3", "MemInterface": "256", "MemClock": "1660",
        "EXPIndex": "27.0 ", "TBP": "175 ",
        "DieSize": "210 ", "TCount": "1332 ", "MProcess": "55 "
    }, {
        "Name": "Radeon HD 5830", "Brand": "AMD", "GPU": "Crypress LE",
        "LaunchDate": "2010-02-23", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "800", "BoostClock": "800 ", "SP": "1120", "ShaderClock": "800 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "256", "MemClock": "4000",
        "EXPIndex": "26.9 ", "TBP": "175", "Review": "9728 ",
        "DieSize": "338 ", "TCount": "2150 ", "MProcess": "40 "
    }, {
        "Name": "Radeon HD 6790", "Brand": "AMD", "GPU": "Barts LE",
        "LaunchDate": "2011-04-04", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "840", "BoostClock": "840 ", "SP": "800", "ShaderClock": "840 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "256", "MemClock": "4200",
        "EXPIndex": "26.5 ", "TBP": "150", "Review": "14616 ",
        "DieSize": "255 ", "TCount": "1700 ", "MProcess": "40 "
    }, {
        "Name": "Radeon HD 4860", "Brand": "AMD", "GPU": "RV790 GT",
        "LaunchDate": "2008-10-12", "LaunchPrice": "0", "DirectX": "10.1",
        "CoreClock": "750", "BoostClock": "750 ", "SP": "640", "ShaderClock": "750 ",
        "MemSize": "512", "MemType": "DDR5", "MemInterface": "256", "MemClock": "3000",
        "EXPIndex": "26.0 ", "TBP": "130", "Review": "8599 ",
        "DieSize": "282 ", "TCount": "959 ", "MProcess": "55 "
    }, {
        "Name": "GeForce 8800 Ultra", "Brand": "NVIDIA", "GPU": "G80-450",
        "LaunchDate": "2007-05-02", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "612", "BoostClock": "612 ", "SP": "128", "ShaderClock": "1500 ",
        "MemSize": "768", "MemType": "DDR3", "MemInterface": "384", "MemClock": "2160",
        "EXPIndex": "26.0 ", "TBP": "175",
        "DieSize": "484 ", "TCount": "681 ", "MProcess": "90 "
    }, {
        "Name": "GeForce 9800 GTX", "Brand": "NVIDIA", "GPU": "G92-420",
        "LaunchDate": "2008-04-01", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "675", "BoostClock": "675 ", "SP": "128", "ShaderClock": "1688 ",
        "MemSize": "512", "MemType": "DDR3", "MemInterface": "256", "MemClock": "2200",
        "EXPIndex": "25.5 ", "TBP": "140", "Review": "3617 ",
        "DieSize": "334 ", "TCount": "754 ", "MProcess": "65 "
    }, {
        "Name": "GeForce GTX 460 SE", "Brand": "NVIDIA", "GPU": "GF104-225",
        "LaunchDate": "2010-11-29", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "650", "BoostClock": "648 ", "SP": "288", "ShaderClock": "1296 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "256", "MemClock": "3400",
        "EXPIndex": "25.4 ", "TBP": "150", "Review": "12879 ",
        "DieSize": "332 ", "TCount": "1950 ", "MProcess": "40 "
    }, {
        "Name": "GeForce GTX 550 Ti", "Brand": "NVIDIA", "GPU": "GF116-400",
        "LaunchDate": "2011-03-15", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "900", "BoostClock": "900 ", "SP": "192", "ShaderClock": "1800 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "192", "MemClock": "4100",
        "EXPIndex": "25.3 ", "TBP": "116", "Review": "14287 ",
        "DieSize": "240 ", "TCount": "1170 ", "MProcess": "40 "
    }, {
        "Name": "GeForce GTX 650", "Brand": "NVIDIA", "GPU": "GK107-450",
        "LaunchDate": "2012-09-13", "LaunchPrice": "799", "DirectX": "11.1",
        "CoreClock": "1058", "BoostClock": "1058 ", "SP": "384", "ShaderClock": "1058 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "128", "MemClock": "5000",
        "EXPIndex": "24.0 ", "TBP": "64", "Review": "21251 ",
        "DieSize": "118 ", "TCount": "1300 ", "MProcess": "28 "
    }, {
        "Name": "Radeon HD 4850", "Brand": "AMD", "GPU": "RV770 Pro",
        "LaunchDate": "2008-06-24", "LaunchPrice": "0", "DirectX": "10.1",
        "CoreClock": "625", "BoostClock": "625 ", "SP": "800", "ShaderClock": "625 ",
        "MemSize": "512", "MemType": "DDR3", "MemInterface": "256", "MemClock": "2000",
        "EXPIndex": "24.0 ", "TBP": "110", "Review": "4255 ",
        "DieSize": "260 ", "TCount": "956 ", "MProcess": "55 "
    }, {
        "Name": "GeForce 8800 GTX", "Brand": "NVIDIA", "GPU": "G80-300",
        "LaunchDate": "2007-10-17", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "575", "BoostClock": "575 ", "SP": "128", "ShaderClock": "1350 ",
        "MemSize": "768", "MemType": "DDR3", "MemInterface": "384", "MemClock": "1800",
        "EXPIndex": "24.0 ", "TBP": "155", "Review": "174 ",
        "DieSize": "484 ", "TCount": "681 ", "MProcess": "90 "
    }, {
        "Name": "GeForce GT 740 GDDR5", "Brand": "NVIDIA", "GPU": "GK107",
        "LaunchDate": "2014-05-29", "LaunchPrice": "699", "DirectX": "11.1",
        "CoreClock": "993 ", "BoostClock": "993 ", "SP": "384", "ShaderClock": "993 ",
        "MemSize": "1024", "MemType": "GDDR5", "MemInterface": "128", "MemClock": "5000",
        "EXPIndex": "23.5 ", "TBP": "64W", "Review": "33723 ",
        "DieSize": "118 ", "TCount": "1300 ", "MProcess": "28 "
    }, {
        "Name": "Radeon HD 7750", "Brand": "AMD", "GPU": "Cape Verde Pro",
        "LaunchDate": "2012-02-15", "LaunchPrice": "109美", "DirectX": "11.1",
        "CoreClock": "800", "BoostClock": "800 ", "SP": "512", "ShaderClock": "800 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "128", "MemClock": "4500",
        "EXPIndex": "23.0 ", "TBP": "55", "Review": "18633 ",
        "DieSize": "123 ", "TCount": "1500 ", "MProcess": "28 "
    }, {
        "Name": "Radeon HD 4770", "Brand": "AMD", "GPU": "RV740 XT",
        "LaunchDate": "2009-04-24", "LaunchPrice": "0", "DirectX": "10.1",
        "CoreClock": "750", "BoostClock": "750 ", "SP": "640", "ShaderClock": "750 ",
        "MemSize": "512", "MemType": "DDR5", "MemInterface": "128", "MemClock": "3200",
        "EXPIndex": "23.0 ", "TBP": "80", "Review": "7010 ",
        "DieSize": "137 ", "TCount": "826 ", "MProcess": "40 "
    }, {
        "Name": "GeForce 8800GTS 512", "Brand": "NVIDIA", "GPU": "G92-400",
        "LaunchDate": "2007-11-11", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "650", "BoostClock": "650 ", "SP": "128", "ShaderClock": "1625 ",
        "MemSize": "512", "MemType": "DDR3", "MemInterface": "256", "MemClock": "1940",
        "EXPIndex": "23.0 ", "TBP": "135",
        "DieSize": "334 ", "TCount": "754 ", "MProcess": "65 "
    }, {
        "Name": "GeForce GT 740", "Brand": "NVIDIA", "GPU": "GK107",
        "LaunchDate": "2014-05-29", "LaunchPrice": "599", "DirectX": "11.1",
        "CoreClock": "993 ", "BoostClock": "993 ", "SP": "384", "ShaderClock": "993 ",
        "MemSize": "1024", "MemType": "GDDR5", "MemInterface": "128", "MemClock": "1800",
        "EXPIndex": "22.7 ", "TBP": "64W", "Review": "33723 ",
        "DieSize": "118 ", "TCount": "1300 ", "MProcess": "28 "
    }, {
        "Name": "Radeon HD 4750", "Brand": "AMD", "GPU": "RV740 Pro",
        "LaunchDate": "2009-09-28", "LaunchPrice": "0", "DirectX": "10.1",
        "CoreClock": "750", "BoostClock": "750 ", "SP": "480", "ShaderClock": "750 ",
        "MemSize": "512", "MemType": "DDR5", "MemInterface": "128", "MemClock": "3200",
        "EXPIndex": "22.5 ", "TBP": "75", "Review": "8534 ",
        "DieSize": "137 ", "TCount": "826 ", "MProcess": "40 "
    }, {
        "Name": "GeForce 9800 GT", "Brand": "NVIDIA", "GPU": "G92-283",
        "LaunchDate": "2008-07-01", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "600", "BoostClock": "600 ", "SP": "112", "ShaderClock": "1500 ",
        "MemSize": "512", "MemType": "DDR3", "MemInterface": "256", "MemClock": "1800",
        "EXPIndex": "22.4 ", "TBP": "105",
        "DieSize": "?", "TCount": "754 ", "MProcess": "65 "
    }, {
        "Name": "Radeon HD 4830", "Brand": "AMD", "GPU": "RV770 LE",
        "LaunchDate": "2008-11-06", "LaunchPrice": "0", "DirectX": "10.1",
        "CoreClock": "575", "BoostClock": "575 ", "SP": "640", "ShaderClock": "575 ",
        "MemSize": "512", "MemType": "DDR3", "MemInterface": "256", "MemClock": "1800",
        "EXPIndex": "22.0 ", "TBP": "110", "Review": "5345 ",
        "DieSize": "260 ", "TCount": "956 ", "MProcess": "55 "
    }, {
        "Name": "Radeon HD 3870", "Brand": "AMD", "GPU": "ATI RV670 XT",
        "LaunchDate": "2007-11-16", "LaunchPrice": "1799", "DirectX": "10.1",
        "CoreClock": "775 ", "SP": "320", "ShaderClock": "775 ",
        "MemSize": "512", "MemType": "GDDR3", "MemInterface": "256", "MemClock": "2250",
        "EXPIndex": "22.0 ", "TBP": "125 ", "Review": "2474 ",
        "DieSize": "210 ", "TCount": "666 ", "MProcess": "55 "
    }, {
        "Name": "Radeon HD 5770", "Brand": "AMD", "GPU": "Juniper XT",
        "LaunchDate": "2009-10-13", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "850", "BoostClock": "850 ", "SP": "800", "ShaderClock": "850 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "128", "MemClock": "4800",
        "EXPIndex": "21.7 ", "TBP": "108", "Review": "9036 ",
        "DieSize": "178 ", "TCount": "1040 ", "MProcess": "40 "
    }, {
        "Name": "Radeon HD 6770", "Brand": "AMD", "GPU": "Juniper XT",
        "LaunchDate": "2011-04-28", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "850", "BoostClock": "850 ", "SP": "800", "ShaderClock": "850 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "128", "MemClock": "4800",
        "EXPIndex": "21.5 ", "TBP": "108", "Review": "15028 ",
        "DieSize": "178 ", "TCount": "1040 ", "MProcess": "40 "
    }, {
        "Name": "GeForce 8800 GT", "Brand": "NVIDIA", "GPU": "G80-270",
        "LaunchDate": "2007-10-29", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "600", "BoostClock": "600 ", "SP": "112", "ShaderClock": "1500 ",
        "MemSize": "512", "MemType": "DDR3", "MemInterface": "256", "MemClock": "1800",
        "EXPIndex": "21.5 ", "TBP": "105",
        "DieSize": "334 ", "TCount": "754 ", "MProcess": "65 "
    }, {
        "Name": "GeForce 8800GTS SSC", "Brand": "NVIDIA", "GPU": "G80",
        "LaunchDate": "2007-10-17", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "512", "BoostClock": "512 ", "SP": "112", "ShaderClock": "1188 ",
        "MemSize": "640", "MemType": "DDR3", "MemInterface": "320", "MemClock": "1600",
        "EXPIndex": "21.5 ", "TBP": "146",
        "DieSize": "484 ", "TCount": "681 ", "MProcess": "90 "
    }, {
        "Name": "Radeon HD 6750", "Brand": "AMD", "GPU": "Juniper Pro",
        "LaunchDate": "2011-04-28", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "700", "BoostClock": "700 ", "SP": "720", "ShaderClock": "700 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "128", "MemClock": "4600",
        "EXPIndex": "20.5 ", "TBP": "86", "Review": "15028 ",
        "DieSize": "178 ", "TCount": "1040 ", "MProcess": "40 "
    }, {
        "Name": "GeForce 9800 GT GE", "Brand": "NVIDIA", "GPU": "G92b",
        "LaunchDate": "2009-02-05", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "550", "BoostClock": "550 ", "SP": "112", "ShaderClock": "1375 ",
        "MemSize": "512", "MemType": "DDR3", "MemInterface": "256", "MemClock": "1800",
        "EXPIndex": "20.5 ", "TBP": "75",
        "DieSize": "296 ", "TCount": "754 ", "MProcess": "55 "
    }, {
        "Name": "GeForce 8800GTS 640", "Brand": "NVIDIA", "GPU": "G80-100",
        "LaunchDate": "2007-10-17", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "512", "BoostClock": "512 ", "SP": "96", "ShaderClock": "1188 ",
        "MemSize": "640", "MemType": "DDR3", "MemInterface": "320", "MemClock": "1600",
        "EXPIndex": "20.5 ", "TBP": "146", "Review": "174 ",
        "DieSize": "484 ", "TCount": "681 ", "MProcess": "90 "
    }, {
        "Name": "Radeon R7 250", "Brand": "AMD", "GPU": "Oland XT",
        "LaunchDate": "2013-10-15", "LaunchPrice": "599", "DirectX": "11.2",
        "CoreClock": "1000", "BoostClock": "1050 ", "SP": "384", "ShaderClock": "1050 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "128", "MemClock": "5000",
        "EXPIndex": "20.0 ", "TBP": "65", "Review": "37673 ",
        "DieSize": "90 ", "TCount": "1040 ", "MProcess": "28 "
    }, {
        "Name": "GeForce 9600 GT", "Brand": "NVIDIA", "GPU": "G94-300",
        "LaunchDate": "2008-02-21", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "650", "BoostClock": "650 ", "SP": "64", "ShaderClock": "1650 ",
        "MemSize": "512", "MemType": "DDR3", "MemInterface": "256", "MemClock": "1800",
        "EXPIndex": "20.0 ", "TBP": "95", "Review": "3266 ",
        "DieSize": "?", "TCount": "505 ", "MProcess": "65 "
    }, {
        "Name": "GeForce GTS 450", "Brand": "NVIDIA", "GPU": "GF106-250",
        "LaunchDate": "2010-09-13", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "783", "BoostClock": "783 ", "SP": "192", "ShaderClock": "1566 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "128", "MemClock": "3600",
        "EXPIndex": "19.7 ", "TBP": "105", "Review": "12021 ",
        "DieSize": "240 ", "TCount": "1170 ", "MProcess": "40 "
    }, {
        "Name": "Radeon HD 6670", "Brand": "AMD", "GPU": "Turks XT",
        "LaunchDate": "2011-05-09", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "800", "BoostClock": "800 ", "SP": "480", "ShaderClock": "800 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "128", "MemClock": "4000",
        "EXPIndex": "19.5 ", "TBP": "66", "Review": "15164 ",
        "DieSize": "118 ", "TCount": "715 ", "MProcess": "40 "
    }, {
        "Name": "Radeon HD 4730", "Brand": "AMD", "GPU": "RV770 CE",
        "LaunchDate": "2009-06-08", "LaunchPrice": "0", "DirectX": "10.1",
        "CoreClock": "700", "BoostClock": "700 ", "SP": "640", "ShaderClock": "700 ",
        "MemSize": "512", "MemType": "DDR5", "MemInterface": "128", "MemClock": "3600",
        "EXPIndex": "19.2 ", "TBP": "110",
        "DieSize": "260 ", "TCount": "956 ", "MProcess": "55 "
    }, {
        "Name": "GeForce 9600GT GE", "Brand": "NVIDIA", "GPU": "G94b",
        "LaunchDate": "2009-01-14", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "600", "BoostClock": "600 ", "SP": "64", "ShaderClock": "1500 ",
        "MemSize": "512", "MemType": "DDR3", "MemInterface": "256", "MemClock": "1800",
        "EXPIndex": "19.0 ", "TBP": "59",
        "DieSize": "240 ", "TCount": "505 ", "MProcess": "55 "
    }, {
        "Name": "Radeon HD 3850", "Brand": "AMD", "GPU": "RV670 Pro",
        "LaunchDate": "2007-11-16", "LaunchPrice": "1599", "DirectX": "10.1",
        "CoreClock": "670 ", "SP": "320", "ShaderClock": "670 ",
        "MemSize": "256", "MemType": "GDDR3", "MemInterface": "256", "MemClock": "1660",
        "EXPIndex": "19.0 ", "TBP": "90 ", "Review": "2574 ",
        "DieSize": "210 ", "TCount": "666 ", "MProcess": "55 "
    }, {
        "Name": "Radeon HD 5750", "Brand": "AMD", "GPU": "Juniper Pro",
        "LaunchDate": "2009-10-13", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "700", "BoostClock": "700 ", "SP": "720", "ShaderClock": "700 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "128", "MemClock": "4600",
        "EXPIndex": "18.9 ", "TBP": "86",
        "DieSize": "178 ", "TCount": "1040 ", "MProcess": "40 "
    }, {
        "Name": "Radeon HD7730 GDDR5", "Brand": "AMD", "GPU": "Cape Verde",
        "LaunchDate": "2013-05-01", "LaunchPrice": "599", "DirectX": "11.1",
        "CoreClock": "800 ", "BoostClock": "800 ", "SP": "384", "ShaderClock": "800 ",
        "MemSize": "1024", "MemType": "GDDR5", "MemInterface": "128", "MemClock": "4500",
        "EXPIndex": "17.8 ", "TBP": "47 ", "Review": "26797 ",
        "DieSize": "123 ", "TCount": "1500 ", "MProcess": "28 "
    }, {
        "Name": "GeForce GTS 250", "Brand": "NVIDIA", "GPU": "G92-421",
        "LaunchDate": "2009-03-03", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "738", "BoostClock": "738 ", "SP": "128", "ShaderClock": "1836 ",
        "MemSize": "512", "MemType": "DDR3", "MemInterface": "256", "MemClock": "2200",
        "EXPIndex": "17.5 ", "TBP": "145",
        "DieSize": "296 ", "TCount": "754 ", "MProcess": "55 "
    }, {
        "Name": "GeForce 8800 GS", "Brand": "NVIDIA", "GPU": "G92-150",
        "LaunchDate": "2008-01-15", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "575", "BoostClock": "575 ", "SP": "96", "ShaderClock": "1438 ",
        "MemSize": "384", "MemType": "DDR3", "MemInterface": "192", "MemClock": "1750",
        "EXPIndex": "17.5 ", "TBP": "105",
        "DieSize": "334 ", "TCount": "754 ", "MProcess": "65 "
    }, {
        "Name": "GeForce GT 730 GDDR5", "Brand": "NVIDIA", "GPU": "GK208",
        "LaunchDate": "2014-06-18", "LaunchPrice": "499", "DirectX": "11.1",
        "CoreClock": "902 ", "BoostClock": "902 ", "SP": "384", "ShaderClock": "902 ",
        "MemSize": "1024", "MemType": "GDDR5", "MemInterface": "64", "MemClock": "5000",
        "EXPIndex": "17.1 ", "TBP": "40 ", "Review": "34153 ",
        "DieSize": "118 ", "TCount": "1300 ", "MProcess": "28 "
    }, {
        "Name": "Radeon R7 240", "Brand": "AMD", "GPU": "Oland Pro",
        "LaunchDate": "2013-10-15", "LaunchPrice": "499", "DirectX": "11.2",
        "CoreClock": "730", "BoostClock": "780 ", "SP": "320", "ShaderClock": "780 ",
        "MemSize": "2048", "MemType": "DDR3", "MemInterface": "128", "MemClock": "4200",
        "EXPIndex": "17.0 ", "TBP": "30", "Review": "28959 ",
        "DieSize": "90 ", "TCount": "1040 ", "MProcess": "28 "
    }, {
        "Name": "Radeon HD7730 DDR3", "Brand": "AMD", "GPU": "Cape Verde",
        "LaunchDate": "2013-05-01", "LaunchPrice": "499", "DirectX": "11.1",
        "CoreClock": "800 ", "BoostClock": "800 ", "SP": "384", "ShaderClock": "800 ",
        "MemSize": "2048", "MemType": "DDR3", "MemInterface": "128", "MemClock": "1800",
        "EXPIndex": "17.0 ", "TBP": "30 ", "Review": "27339 ",
        "DieSize": "123 ", "TCount": "1500 ", "MProcess": "28 "
    }, {
        "Name": "Radeon HD 8670D", "Brand": "AMD", "GPU": "Oland",
        "LaunchDate": "2013-06-04", "LaunchPrice": "149美", "DirectX": "11",
        "CoreClock": "844", "BoostClock": "844 ", "SP": "384", "ShaderClock": "844 ",
        "MemSize": "1024", "MemType": "DDR3", "MemInterface": "128", "MemClock": "1866",
        "EXPIndex": "16.5 ", "TBP": "100", "Review": "27381 ",
        "DieSize": "246 ", "TCount": "1303 ", "MProcess": "32 "
    }, {
        "Name": "Radeon HD 7660D", "Brand": "AMD", "GPU": "Trinity",
        "LaunchDate": "2012-10-02", "LaunchPrice": "870", "DirectX": "11",
        "CoreClock": "800", "BoostClock": "800 ", "SP": "384", "ShaderClock": "800 ",
        "MemSize": "1024", "MemType": "DDR3", "MemInterface": "128", "MemClock": "1600",
        "EXPIndex": "16.5 ", "TBP": "100", "Review": "21503 ",
        "DieSize": "246 ", "TCount": "1303 ", "MProcess": "32 "
    }, {
        "Name": "GeForce 9600GSO 384", "Brand": "NVIDIA", "GPU": "G92-150",
        "LaunchDate": "2008-05-01", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "575", "BoostClock": "575 ", "SP": "96", "ShaderClock": "1438 ",
        "MemSize": "384", "MemType": "DDR3", "MemInterface": "192", "MemClock": "1750",
        "EXPIndex": "16.2 ", "TBP": "84", "Review": "5939 ",
        "DieSize": "334 ", "TCount": "754 ", "MProcess": "65 "
    }, {
        "Name": "GeForce GT 730 DDR3, 128-bit", "Brand": "NVIDIA", "GPU": "GF108",
        "LaunchDate": "2014-06-18", "LaunchPrice": "399", "DirectX": "11",
        "CoreClock": "700 ", "BoostClock": "700 ", "SP": "96", "ShaderClock": "1400 ",
        "MemSize": "1024", "MemType": "GDDR3", "MemInterface": "128", "MemClock": "1800",
        "EXPIndex": "16.0 ", "TBP": "65 ",
        "DieSize": "114 ", "TCount": "585 ", "MProcess": "40 "
    }, {
        "Name": "GeForce GT240 DDR5", "Brand": "NVIDIA", "GPU": "GT215",
        "LaunchDate": "2009-11-17", "LaunchPrice": "0", "DirectX": "10.1",
        "CoreClock": "550", "BoostClock": "550 ", "SP": "96", "ShaderClock": "1340 ",
        "MemSize": "512", "MemType": "DDR5", "MemInterface": "128", "MemClock": "3400",
        "EXPIndex": "16.0 ", "TBP": "69",
        "DieSize": "142 ", "TCount": "727 ", "MProcess": "40 "
    }, {
        "Name": "HD 6570 DDR5", "Brand": "AMD", "GPU": "Turks Pro",
        "LaunchDate": "2011-05-09", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "650", "BoostClock": "650 ", "SP": "480", "ShaderClock": "650 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "128", "MemClock": "4000",
        "EXPIndex": "15.6 ", "TBP": "44", "Review": "15164 ",
        "DieSize": "118 ", "TCount": "715 ", "MProcess": "40 "
    }, {
        "Name": "GeForce GT 730 DDR3, 64-bit", "Brand": "NVIDIA", "GPU": "GK208",
        "LaunchDate": "2014-06-18", "LaunchPrice": "399", "DirectX": "11.1",
        "CoreClock": "902 ", "BoostClock": "902 ", "SP": "384", "ShaderClock": "902 ",
        "MemSize": "2048", "MemType": "DDR3", "MemInterface": "64", "MemClock": "1800",
        "EXPIndex": "15.0 ", "TBP": "35 ",
        "DieSize": "118 ", "TCount": "1300 ", "MProcess": "28 "
    }, {
        "Name": "GeForce GT 640", "Brand": "NVIDIA", "GPU": "GK107-300",
        "LaunchDate": "2012-06-04", "LaunchPrice": "699", "DirectX": "11.1",
        "CoreClock": "950", "BoostClock": "950 ", "SP": "384", "ShaderClock": "950 ",
        "MemSize": "2048", "MemType": "DDR3", "MemInterface": "128", "MemClock": "1782",
        "EXPIndex": "15.0 ", "TBP": "65", "Review": "19768 ",
        "DieSize": "118 ", "TCount": "1300 ", "MProcess": "28 "
    }, {
        "Name": "GeForce 9600GSO 512", "Brand": "NVIDIA", "GPU": "G94-210",
        "LaunchDate": "2008-10-01", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "650", "BoostClock": "650 ", "SP": "48", "ShaderClock": "1650 ",
        "MemSize": "512", "MemType": "DDR3", "MemInterface": "256", "MemClock": "1800",
        "EXPIndex": "15.0 ", "TBP": "90",
        "DieSize": "240 ", "TCount": "505 ", "MProcess": "55 "
    }, {
        "Name": "Radeon HD 4670", "Brand": "AMD", "GPU": "RV730 XT",
        "LaunchDate": "2008-09-10", "LaunchPrice": "0", "DirectX": "10.1",
        "CoreClock": "750", "BoostClock": "750 ", "SP": "320", "ShaderClock": "750 ",
        "MemSize": "512", "MemType": "DDR3", "MemInterface": "128", "MemClock": "2000",
        "EXPIndex": "14.4 ", "TBP": "59",
        "DieSize": "144 ", "TCount": "514 ", "MProcess": "55 "
    }, {
        "Name": "Radeon HD 7560D", "Brand": "AMD", "GPU": "Trinity ",
        "LaunchDate": "2012-10-02", "LaunchPrice": "700", "DirectX": "11",
        "CoreClock": "760", "BoostClock": "760 ", "SP": "256", "ShaderClock": "760 ",
        "MemSize": "1024", "MemType": "DDR3", "MemInterface": "128", "MemClock": "1600",
        "EXPIndex": "14.0 ", "TBP": "100",
        "DieSize": "246 ", "TCount": "1303 ", "MProcess": "32 "
    }, {
        "Name": "Radeon HD 6550D", "Brand": "AMD", "GPU": "BeaverCreek",
        "LaunchDate": "2011-06-30", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "600", "BoostClock": "600 ", "SP": "400", "ShaderClock": "600 ",
        "MemSize": "1024", "MemType": "DDR3", "MemInterface": "128", "MemClock": "1333",
        "EXPIndex": "14.0 ", "TBP": "33",
        "DieSize": "228 ", "TCount": "1450 ", "MProcess": "32 "
    }, {
        "Name": "GeForce GT240 DDR3", "Brand": "NVIDIA", "GPU": "GT215",
        "LaunchDate": "2010-01-06", "LaunchPrice": "0", "DirectX": "10.1",
        "CoreClock": "550", "BoostClock": "550 ", "SP": "96", "ShaderClock": "1340 ",
        "MemSize": "512", "MemType": "DDR3", "MemInterface": "128", "MemClock": "2000",
        "EXPIndex": "14.0 ", "TBP": "69",
        "DieSize": "142 ", "TCount": "727 ", "MProcess": "40 "
    }, {
        "Name": "Radeon HD 5670", "Brand": "AMD", "GPU": "Redwood XT",
        "LaunchDate": "2010-01-14", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "775", "BoostClock": "775 ", "SP": "400", "ShaderClock": "775 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "128", "MemClock": "4000",
        "EXPIndex": "13.2 ", "TBP": "61", "Review": "9349 ",
        "DieSize": "104 ", "TCount": "627 ", "MProcess": "40 "
    }, {
        "Name": "Iris Pro 6200", "Brand": "Intel", "GPU": "Broadwell GT3e",
        "LaunchDate": "2014-09-05", "DirectX": "11.2",
        "CoreClock": "300 ", "BoostClock": "1150 ",
        "MemSize": "1732", "MemType": "DDR3", "MemInterface": "128", "MemClock": "1600",
        "SP": "48", "ShaderClock": "1150 ",
        "EXPIndex": "13.0 ", "TBP": "5 ", "Review": "40900 ",
        "DieSize": "Fusion", "TCount": "Fusion", "MProcess": "14 "
    }, {
        "Name": "Radeon HD 8570D", "Brand": "AMD", "GPU": "Oland LE",
        "LaunchDate": "2013-06-04", "LaunchPrice": "99美", "DirectX": "11",
        "CoreClock": "800", "BoostClock": "800 ", "SP": "256", "ShaderClock": "800 ",
        "MemSize": "1024", "MemType": "DDR3", "MemInterface": "128", "MemClock": "1600",
        "EXPIndex": "12.5 ", "TBP": "65",
        "DieSize": "246 ", "TCount": "1303 ", "MProcess": "32 "
    }, {
        "Name": "GeForce GT 720 GDDR5", "Brand": "NVIDIA", "GPU": "GK208",
        "LaunchDate": "2014-08-13", "LaunchPrice": "299", "DirectX": "11.1",
        "CoreClock": "797 ", "BoostClock": "797 ", "SP": "192", "ShaderClock": "797 ",
        "MemSize": "1024", "MemType": "GDDR5", "MemInterface": "64", "MemClock": "5000",
        "EXPIndex": "12.0 ", "TBP": "19 ",
        "DieSize": "79 ", "TCount": "1020 ", "MProcess": "28 "
    }, {
        "Name": "HD 6570 DDR3", "Brand": "AMD", "GPU": "Turks Pro",
        "LaunchDate": "2011-05-09", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "650", "BoostClock": "650 ", "SP": "480", "ShaderClock": "650 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "128", "MemClock": "1800",
        "EXPIndex": "12.0 ", "TBP": "44",
        "DieSize": "118 ", "TCount": "715 ", "MProcess": "40 "
    }, {
        "Name": "GeForce GT 440 DDR5", "Brand": "NVIDIA", "GPU": "GF108-400",
        "LaunchDate": "2011-02-01", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "810", "BoostClock": "810 ", "SP": "96", "ShaderClock": "1620 ",
        "MemSize": "512", "MemType": "DDR5", "MemInterface": "128", "MemClock": "3200",
        "EXPIndex": "11.2 ", "TBP": "65", "Review": "13717 ",
        "DieSize": "114 ", "TCount": "585 ", "MProcess": "40 "
    }, {
        "Name": "GeForce GT 720 DDR3", "Brand": "NVIDIA", "GPU": "GK208",
        "LaunchDate": "2014-08-13", "LaunchPrice": "269", "DirectX": "11.1",
        "CoreClock": "797 ", "BoostClock": "797 ", "SP": "192", "ShaderClock": "797 ",
        "MemSize": "2048", "MemType": "DDR3", "MemInterface": "64", "MemClock": "1800",
        "EXPIndex": "11.0 ", "TBP": "19 ",
        "DieSize": "79 ", "TCount": "1020 ", "MProcess": "28 "
    }, {
        "Name": "Radeon HD 6530D", "Brand": "AMD", "GPU": "BeaverCreek",
        "LaunchDate": "2011-06-30", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "433", "BoostClock": "433 ", "SP": "320", "ShaderClock": "433 ",
        "MemSize": "1024", "MemType": "DDR3", "MemInterface": "128", "MemClock": "1333",
        "EXPIndex": "11.0 ", "TBP": "33",
        "DieSize": "228 ", "TCount": "1450 ", "MProcess": "32 "
    }, {
        "Name": "GeForce 8600GTS", "Brand": "NVIDIA", "GPU": "G84-300",
        "LaunchDate": "2007-04-17", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "575", "BoostClock": "675 ", "SP": "32", "ShaderClock": "2000 ",
        "MemSize": "256", "MemType": "DDR3", "MemInterface": "128", "MemClock": "1450",
        "EXPIndex": "11.0 ", "TBP": "71", "Review": "1145 ",
        "DieSize": "173 ", "TCount": "289 ", "MProcess": "80 "
    }, {
        "Name": "Radeon HD 7540D", "Brand": "AMD", "GPU": "Trinity ",
        "LaunchDate": "2012-10-02", "LaunchPrice": "450", "DirectX": "11",
        "CoreClock": "760", "BoostClock": "760 ", "SP": "192", "ShaderClock": "760 ",
        "MemSize": "1024", "MemType": "DDR3", "MemInterface": "128", "MemClock": "1600",
        "EXPIndex": "10.5 ", "TBP": "65",
        "DieSize": "246 ", "TCount": "1303 ", "MProcess": "32 "
    }, {
        "Name": "GeForce GT 710", "Brand": "NVIDIA", "GPU": "GK208",
        "LaunchDate": "2016-01-27", "LaunchPrice": "299", "DirectX": "11.1",
        "CoreClock": "954 ", "BoostClock": "954 ", "SP": "192", "ShaderClock": "954 ",
        "MemSize": "2048", "MemType": "DDR3", "MemInterface": "64", "MemClock": "1800",
        "EXPIndex": "10.0 ", "TBP": "19 ", "Review": "45869 ",
        "DieSize": "79 ", "TCount": "1020 ", "MProcess": "28 "
    }, {
        "Name": "GeForce GT 440 DDR3", "Brand": "NVIDIA", "GPU": "GF108-400",
        "LaunchDate": "2011-01-31", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "810", "BoostClock": "810 ", "SP": "96", "ShaderClock": "1620 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "128", "MemClock": "1800",
        "EXPIndex": "10.0 ", "TBP": "65",
        "DieSize": "114 ", "TCount": "585 ", "MProcess": "40 "
    }, {
        "Name": "Radeon HD 5570", "Brand": "AMD", "GPU": "Redwood Pro",
        "LaunchDate": "2010-02-09", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "650", "BoostClock": "650 ", "SP": "400", "ShaderClock": "650 ",
        "MemSize": "1024", "MemType": "DDR3", "MemInterface": "128", "MemClock": "1800",
        "EXPIndex": "9.8 ", "TBP": "39",
        "DieSize": "104 ", "TCount": "627 ", "MProcess": "40 "
    }, {
        "Name": "Radeon HD 2900 XTX", "Brand": "AMD", "GPU": "R600",
        "LaunchDate": "2007-05-14", "LaunchPrice": "499美", "DirectX": "10",
        "CoreClock": "745 ", "SP": "320", "ShaderClock": "745 ",
        "MemSize": "1024", "MemType": "GDDR4", "MemInterface": "512", "MemClock": "2000",
        "EXPIndex": "9.6 ", "TBP": "230 ",
        "DieSize": "428 ", "TCount": "700 ", "MProcess": "80 "
    }, {
        "Name": "Radeon HD 7480D", "Brand": "AMD", "GPU": "Trinity ",
        "LaunchDate": "2012-10-02", "LaunchPrice": "310", "DirectX": "11",
        "CoreClock": "723", "BoostClock": "723 ", "SP": "128", "ShaderClock": "723 ",
        "MemSize": "1024", "MemType": "DDR3", "MemInterface": "128", "MemClock": "1600",
        "EXPIndex": "9.5 ", "TBP": "65",
        "DieSize": "246 ", "TCount": "1303 ", "MProcess": "32 "
    }, {
        "Name": "GeForce 9500GT", "Brand": "NVIDIA", "GPU": "G96-300",
        "LaunchDate": "2008-05-06", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "550", "BoostClock": "550 ", "SP": "32", "ShaderClock": "1600 ",
        "MemSize": "512", "MemType": "DDR3", "MemInterface": "128", "MemClock": "1400",
        "EXPIndex": "9.5 ", "TBP": "50", "Review": "3866 ",
        "TCount": "314 ", "MProcess": "80 "
    }, {
        "Name": "GeForce 8600GT", "Brand": "NVIDIA", "GPU": "G84-300",
        "LaunchDate": "2007-04-17", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "540", "BoostClock": "540 ", "SP": "32", "ShaderClock": "1400 ",
        "MemSize": "256", "MemType": "DDR3", "MemInterface": "128", "MemClock": "1180",
        "EXPIndex": "9.5 ", "TBP": "43", "Review": "1145 ",
        "DieSize": "173 ", "TCount": "289 ", "MProcess": "80 "
    }, {
        "Name": "GeForce GT 430 DDR5", "Brand": "NVIDIA", "GPU": "GF108-300",
        "LaunchDate": "2010-10-11", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "700", "BoostClock": "700 ", "SP": "96", "ShaderClock": "1400 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "128", "MemClock": "3600",
        "EXPIndex": "9.4 ", "TBP": "49", "Review": "12302 ",
        "DieSize": "114 ", "TCount": "585 ", "MProcess": "40 "
    }, {
        "Name": "Radeon HD 4650", "Brand": "AMD", "GPU": "RV730 Pro",
        "LaunchDate": "2008-09-10", "LaunchPrice": "0", "DirectX": "10.1",
        "CoreClock": "600", "BoostClock": "600 ", "SP": "320", "ShaderClock": "600 ",
        "MemSize": "512", "MemType": "DDR2", "MemInterface": "128", "MemClock": "1000",
        "EXPIndex": "9.2 ", "TBP": "48",
        "DieSize": "144 ", "TCount": "514 ", "MProcess": "55 "
    }, {
        "Name": "Radeon HD 3830", "Brand": "AMD", "GPU": "RV670",
        "LaunchDate": "2008-04-01", "DirectX": "10.1",
        "CoreClock": "670 ", "SP": "320", "ShaderClock": "670 ",
        "MemSize": "256", "MemType": "GDDR3", "MemInterface": "128", "MemClock": "1660",
        "EXPIndex": "9.0 ", "TBP": "90 ",
        "DieSize": "210 ", "TCount": "666 ", "MProcess": "55 "
    }, {
        "Name": "HD Graphics 630", "Brand": "Intel", "GPU": "Kaby Lake GT2",
        "LaunchDate": "2017-01-09", "DirectX": "12",
        "CoreClock": "350 ", "BoostClock": "1150 ", "SP": "24", "ShaderClock": "1150 ",
        "MemSize": "1732", "MemType": "DDR4", "MemInterface": "128", "MemClock": "2133",
        "EXPIndex": "8.5 ", "TBP": "5 ", "Review": "51919 ",
        "DieSize": "Fusion", "TCount": "Fusion", "MProcess": "14 "
    }, {
        "Name": "GeForce GT 430 DDR3", "Brand": "NVIDIA", "GPU": "GF108-300",
        "LaunchDate": "2010-10-11", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "700", "BoostClock": "700 ", "SP": "96", "ShaderClock": "1400 ",
        "MemSize": "1024", "MemType": "DDR3", "MemInterface": "128", "MemClock": "1800",
        "EXPIndex": "8.5 ", "TBP": "49",
        "DieSize": "114 ", "TCount": "585 ", "MProcess": "40 "
    }, {
        "Name": "GeForce GT 630", "Brand": "NVIDIA", "GPU": "GF108",
        "LaunchDate": "2012-05-15", "LaunchPrice": "499", "DirectX": "11",
        "CoreClock": "810", "BoostClock": "810 ", "SP": "96", "ShaderClock": "1620 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "128", "MemClock": "1800",
        "EXPIndex": "8.4 ", "TBP": "65", "Review": "22311 ",
        "DieSize": "116 ", "TCount": "585 ", "MProcess": "40 "
    }, {
        "Name": "Radeon HD 2900 XT", "Brand": "AMD", "GPU": "R600",
        "LaunchDate": "2007-05-14", "LaunchPrice": "399美", "DirectX": "10",
        "CoreClock": "742 ", "SP": "320", "ShaderClock": "742 ",
        "MemSize": "512", "MemType": "GDDR3", "MemInterface": "512", "MemClock": "1650",
        "EXPIndex": "8.2 ", "TBP": "230 ",
        "DieSize": "428 ", "TCount": "700 ", "MProcess": "80 "
    }, {
        "Name": "HD Graphics 530", "Brand": "Intel", "GPU": "Skylake GT2",
        "LaunchDate": "2015-09-01", "DirectX": "12",
        "CoreClock": "350 ", "BoostClock": "1150 ", "SP": "48", "ShaderClock": "1150 ",
        "MemSize": "1732", "MemType": "DDR4", "MemInterface": "128", "MemClock": "2133",
        "EXPIndex": "8.0 ", "TBP": "5 ", "Review": "51919 ",
        "DieSize": "133 ", "TCount": "Fusion", "MProcess": "14 "
    }, {
        "Name": "Radeon R5 230", "Brand": "AMD", "GPU": "Caicos",
        "LaunchDate": "2014-04-03", "LaunchPrice": "59.99美", "DirectX": "11.1",
        "CoreClock": "625 ", "BoostClock": "625 ", "SP": "160", "ShaderClock": "625 ",
        "MemSize": "1024", "MemType": "GDDR3", "MemInterface": "64", "MemClock": "1334",
        "EXPIndex": "8.0 ", "TBP": "19 ",
        "DieSize": "67 ", "TCount": "370 ", "MProcess": "40 "
    }, {
        "Name": "HD Graphics 4600", "Brand": "Intel", "GPU": "Gen7",
        "LaunchDate": "2013-06-13", "LaunchPrice": "0", "DirectX": "11.1",
        "CoreClock": "350", "BoostClock": "1250 ", "SP": "20", "ShaderClock": "1250 ",
        "MemSize": "1720", "MemType": "DDR3", "MemInterface": "128", "MemClock": "1600",
        "EXPIndex": "8.0 ", "TBP": "55",
        "DieSize": "Fusion", "TCount": "Fusion", "MProcess": "22 "
    }, {
        "Name": "Radeon HD 6410D", "Brand": "AMD", "GPU": "WinterPark",
        "LaunchDate": "2011-09-07", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "433", "BoostClock": "433 ", "SP": "160", "ShaderClock": "433 ",
        "MemSize": "1024", "MemType": "DDR3", "MemInterface": "128", "MemClock": "1333",
        "EXPIndex": "8.0 ", "TBP": "33",
        "DieSize": "228 ", "TCount": "1450 ", "MProcess": "32 "
    }, {
        "Name": "Radeon HD 6450 DDR5", "Brand": "AMD", "GPU": "Caicos",
        "LaunchDate": "2011-05-15", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "750", "BoostClock": "750 ", "SP": "160", "ShaderClock": "750 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "64", "MemClock": "3600",
        "EXPIndex": "8.0 ", "TBP": "31",
        "DieSize": "67 ", "TCount": "370 ", "MProcess": "40 "
    }, {
        "Name": "GeForce GT220", "Brand": "NVIDIA", "GPU": "GT216",
        "LaunchDate": "2009-10-12", "LaunchPrice": "0", "DirectX": "10.1",
        "CoreClock": "625", "BoostClock": "625 ", "SP": "48", "ShaderClock": "1360 ",
        "MemSize": "1024", "MemType": "DDR3", "MemInterface": "128", "MemClock": "1580",
        "EXPIndex": "8.0 ", "TBP": "58",
        "DieSize": "100 ", "TCount": "486 ", "MProcess": "40 "
    }, {
        "Name": "Radeon HD 2900 PRO", "Brand": "AMD", "GPU": "R600",
        "LaunchDate": "2007-12-12", "DirectX": "10",
        "CoreClock": "600 ", "SP": "320", "ShaderClock": "600 ",
        "MemSize": "512", "MemType": "GDDR3", "MemInterface": "512", "MemClock": "1600",
        "EXPIndex": "7.7 ", "TBP": "160 ",
        "DieSize": "428 ", "TCount": "700 ", "MProcess": "80 "
    }, {
        "Name": "Radeon HD 2600 XT", "Brand": "AMD", "GPU": "RV630",
        "LaunchDate": "2007-06-28", "LaunchPrice": "999", "DirectX": "10",
        "CoreClock": "800 ", "SP": "120", "ShaderClock": "800 ",
        "MemSize": "512", "MemType": "GDDR3", "MemInterface": "128", "MemClock": "1600",
        "EXPIndex": "6.5 ", "TBP": "55 ", "Review": "2062 ",
        "DieSize": "153 ", "TCount": "390 ", "MProcess": "65 "
    }, {
        "Name": "Radeon HD 3730", "Brand": "AMD", "GPU": "RV635",
        "LaunchDate": "2008-10-05", "DirectX": "10.1",
        "CoreClock": "800 ", "SP": "120", "ShaderClock": "800 ",
        "MemSize": "1024", "MemType": "GDDR3", "MemInterface": "128", "MemClock": "800",
        "EXPIndex": "6.2 ", "TBP": "?",
        "DieSize": "118 ", "TCount": "378 ", "MProcess": "55 "
    }, {
        "Name": "Radeon HD 6450 DDR3", "Brand": "AMD", "GPU": "Caicos",
        "LaunchDate": "2011-05-15", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "625", "BoostClock": "625 ", "SP": "160", "ShaderClock": "625 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "64", "MemClock": "1600",
        "EXPIndex": "6.0 ", "TBP": "31",
        "DieSize": "67 ", "TCount": "370 ", "MProcess": "40 "
    }, {
        "Name": "Radeon HD3650", "Brand": "AMD", "GPU": "RV635",
        "LaunchDate": "2008-01-20", "DirectX": "10.1",
        "CoreClock": "725 ", "SP": "120", "ShaderClock": "725 ",
        "MemSize": "512", "MemType": "GDDR3", "MemInterface": "128", "MemClock": "1600",
        "EXPIndex": "6.0 ", "TBP": "50 ",
        "DieSize": "118 ", "TCount": "378 ", "MProcess": "55 "
    }, {
        "Name": "Radeon HD 2900 GT", "Brand": "AMD", "GPU": "R600",
        "LaunchDate": "2007-12-12", "DirectX": "10",
        "CoreClock": "600 ", "SP": "240", "ShaderClock": "600 ",
        "MemSize": "128", "MemType": "GDDR3", "MemInterface": "256", "MemClock": "1600",
        "EXPIndex": "5.8 ", "TBP": "?",
        "DieSize": "428 ", "TCount": "700 ", "MProcess": "80 "
    }, {
        "Name": "Radeon HD 5450", "Brand": "AMD", "GPU": "Cedar Pro",
        "LaunchDate": "2010-02-04", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "650", "BoostClock": "650 ", "SP": "80", "ShaderClock": "650 ",
        "MemSize": "1024", "MemType": "DDR5", "MemInterface": "64", "MemClock": "1600",
        "EXPIndex": "5.5 ", "TBP": "19", "Review": "9584 ",
        "DieSize": "59 ", "TCount": "292 ", "MProcess": "40 "
    }, {
        "Name": "Radeon HD 2600 PRO", "Brand": "AMD", "GPU": "RV630",
        "LaunchDate": "2007-06-28", "LaunchPrice": "799", "DirectX": "10",
        "CoreClock": "600 ", "SP": "120", "ShaderClock": "600 ",
        "MemSize": "256", "MemType": "GDDR3", "MemInterface": "128", "MemClock": "1000",
        "EXPIndex": "5.1 ", "TBP": "37 ", "Review": "528 ",
        "DieSize": "153 ", "TCount": "390 ", "MProcess": "65 "
    }, {
        "Name": "GeForce GT 620", "Brand": "NVIDIA", "GPU": "GF108",
        "LaunchDate": "2012-05-15", "LaunchPrice": "399", "DirectX": "11",
        "CoreClock": "700", "BoostClock": "700 ", "SP": "96", "ShaderClock": "1400 ",
        "MemSize": "1024", "MemType": "DDR3", "MemInterface": "128", "MemClock": "1800",
        "EXPIndex": "5.0 ", "TBP": "49",
        "DieSize": "116 ", "TCount": "585 ", "MProcess": "40 "
    }, {
        "Name": "HD Graphics 4000", "Brand": "Intel", "GPU": "Ge7",
        "LaunchDate": "2012-04-23", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "650", "BoostClock": "1150 ", "SP": "16", "ShaderClock": "1150 ",
        "MemSize": "1720", "MemType": "DDR3", "MemInterface": "128", "MemClock": "1600",
        "EXPIndex": "5.0 ", "TBP": "45",
        "DieSize": "Fusion", "TCount": "Fusion", "MProcess": "22 "
    }, {
        "Name": "GeForce 7900GTO", "Brand": "NVIDIA", "GPU": "G71",
        "LaunchDate": "2006-10-01", "LaunchPrice": "2699", "DirectX": "9.0C",
        "CoreClock": "650 ", "SP": "24", "ShaderClock": "650 ",
        "MemSize": "512", "MemType": "GDDR3", "MemInterface": "256", "MemClock": "1320",
        "EXPIndex": "5.0 ", "TBP": "85 ",
        "DieSize": "196 ", "TCount": "278 ", "MProcess": "90 "
    }, {
        "Name": "GeForce 7950GT", "Brand": "NVIDIA", "GPU": "G71",
        "LaunchDate": "2006-08-06", "LaunchPrice": "1699", "DirectX": "9.0C",
        "CoreClock": "550 ", "SP": "24", "ShaderClock": "550 ",
        "MemSize": "512", "MemType": "GDDR3", "MemInterface": "256", "MemClock": "1400",
        "EXPIndex": "5.0 ", "TBP": "70 ",
        "DieSize": "196 ", "TCount": "278 ", "MProcess": "90 "
    }, {
        "Name": "GeForce 7950GX2", "Brand": "NVIDIA", "GPU": "G71",
        "LaunchDate": "2006-06-06", "LaunchPrice": "5999", "DirectX": "9.0C",
        "CoreClock": "500 ", "BoostClock": "500 ", "SP": "24", "ShaderClock": "500 ",
        "MemSize": "512", "MemType": "GDDR3", "MemInterface": "256", "MemClock": "1200",
        "EXPIndex": "5.0 ", "TBP": "130 ",
        "DieSize": "196 ", "TCount": "556 ", "MProcess": "90 "
    }, {
        "Name": "GeForce 7900GS", "Brand": "NVIDIA", "GPU": "G71",
        "LaunchDate": "2006-05-01", "LaunchPrice": "199美", "DirectX": "9.0C",
        "CoreClock": "450 ", "SP": "20", "ShaderClock": "450 ",
        "MemSize": "256", "MemType": "GDDR3", "MemInterface": "256", "MemClock": "1320",
        "EXPIndex": "5.0 ", "TBP": "55 ",
        "DieSize": "196 ", "TCount": "278 ", "MProcess": "90 "
    }, {
        "Name": "GeForce 7900GX2", "Brand": "NVIDIA", "GPU": "G71",
        "LaunchDate": "2006-04-30", "LaunchPrice": "5699", "DirectX": "9.0C",
        "CoreClock": "500 ", "SP": "24", "ShaderClock": "500 ",
        "MemType": "GDDR3", "MemSize": "512", "MemInterface": "256", "MemClock": "1200",
        "EXPIndex": "5.0 ", "TBP": "130 ",
        "DieSize": "196 ", "TCount": "556 ", "MProcess": "90 "
    }, {
        "Name": "GeForce 7900GTX", "Brand": "NVIDIA", "GPU": "G71",
        "LaunchDate": "2006-03-09", "LaunchPrice": "5999", "DirectX": "9.0C",
        "CoreClock": "650 ", "SP": "24", "ShaderClock": "650 ",
        "MemSize": "512", "MemType": "GDDR3", "MemInterface": "256", "MemClock": "1600",
        "EXPIndex": "5.0 ", "TBP": "85 ",
        "DieSize": "196 ", "TCount": "278 ", "MProcess": "90 "
    }, {
        "Name": "GeForce 7900GT", "Brand": "NVIDIA", "GPU": "G71",
        "LaunchDate": "2006-03-09", "LaunchPrice": "299美", "DirectX": "9.0C",
        "CoreClock": "450 ", "SP": "24", "ShaderClock": "450 ",
        "MemSize": "256", "MemType": "GDDR3", "MemInterface": "256", "MemClock": "1320",
        "EXPIndex": "5.0 ", "TBP": "60 ",
        "DieSize": "196 ", "TCount": "278 ", "MProcess": "90 "
    }, {
        "Name": "GeForce GT 520", "Brand": "NVIDIA", "GPU": "GF119-300",
        "LaunchDate": "2011-04-11", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "810", "BoostClock": "810 ", "SP": "48", "ShaderClock": "1620 ",
        "MemSize": "1024", "MemType": "DDR3", "MemInterface": "64", "MemClock": "1800",
        "EXPIndex": "4.7 ", "TBP": "29", "Review": "14781 ",
        "DieSize": "79 ", "TCount": "?", "MProcess": "40 "
    }, {
        "Name": "Radeon HD 6250", "Brand": "AMD", "GPU": "Wrestler",
        "LaunchDate": "2011-11-09", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "280", "BoostClock": "280 ", "SP": "80", "ShaderClock": "280 ",
        "MemSize": "512", "MemType": "DDR3", "MemInterface": "64", "MemClock": "800",
        "EXPIndex": "4.5 ", "TBP": "32",
        "DieSize": "Fusion", "TCount": "Fusion", "MProcess": "40 "
    }, {
        "Name": "GeForce 9400GT", "Brand": "NVIDIA", "GPU": "G96b",
        "LaunchDate": "2008-08-27", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "450", "BoostClock": "450 ", "SP": "16", "ShaderClock": "900 ",
        "MemSize": "256", "MemType": "DDR2", "MemInterface": "128", "MemClock": "800",
        "EXPIndex": "4.2 ", "TBP": "50",
        "DieSize": "86 ", "TCount": "210 ", "MProcess": "65 "
    }, {
        "Name": "GeForce 8500GT", "Brand": "NVIDIA", "GPU": "G86-300",
        "LaunchDate": "2007-04-17", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "450", "BoostClock": "450 ", "SP": "16", "ShaderClock": "900 ",
        "MemSize": "256", "MemType": "DDR2", "MemInterface": "128", "MemClock": "800",
        "EXPIndex": "4.2 ", "Review": "1145 ", "TBP": "43",
        "DieSize": "122 ", "TCount": "210 ", "MProcess": "80 "
    }, {
        "Name": "GeForce GT 610", "Brand": "NVIDIA", "GPU": "GF119",
        "LaunchDate": "2012-05-15", "LaunchPrice": "339", "DirectX": "11",
        "CoreClock": "810", "BoostClock": "810 ", "SP": "48", "ShaderClock": "1620 ",
        "MemSize": "1024", "MemType": "DDR3", "MemInterface": "64", "MemClock": "1800",
        "EXPIndex": "4.0 ", "TBP": "29",
        "DieSize": "79 ", "TCount": "292 ", "MProcess": "40 "
    }, {
        "Name": "HD Graphics 3000", "Brand": "Intel", "GPU": "Gen6",
        "LaunchDate": "2011-01-05", "LaunchPrice": "0", "DirectX": "10.1",
        "CoreClock": "850", "BoostClock": "1350 ", "SP": "12", "ShaderClock": "1350 ",
        "MemSize": "1720", "MemType": "DDR3", "MemInterface": "128", "MemClock": "1333",
        "EXPIndex": "4.0 ", "TBP": "44",
        "DieSize": "Fusion", "TCount": "Fusion", "MProcess": "32 "
    }, {
        "Name": "GeForce 9400 IGP", "Brand": "NVIDIA", "GPU": "MCP7A-U",
        "LaunchDate": "2008-10-01", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "580", "BoostClock": "580 ", "SP": "16", "ShaderClock": "1400 ",
        "MemSize": "256", "MemType": "DDR2", "MemInterface": "128", "MemClock": "1333",
        "EXPIndex": "4.0 ", "TBP": "12",
        "TCount": "?", "MProcess": "65 "
    }, {
        "Name": "Radeon HD 4550", "Brand": "AMD", "GPU": "RV710",
        "LaunchDate": "2008-09-30", "LaunchPrice": "0", "DirectX": "10.1",
        "CoreClock": "800", "BoostClock": "800 ", "SP": "80", "ShaderClock": "800 ",
        "MemSize": "512", "MemType": "DDR3", "MemInterface": "64", "MemClock": "1600",
        "EXPIndex": "4.0 ", "TBP": "25",
        "DieSize": "73 ", "TCount": "242 ", "MProcess": "55 "
    }, {
        "Name": "Radeon HD3470", "Brand": "AMD", "GPU": "RV620",
        "LaunchDate": "2008-01-23", "DirectX": "10.1",
        "CoreClock": "800 ", "SP": "40", "ShaderClock": "800 ",
        "MemSize": "256", "MemType": "GDDR3", "MemInterface": "64", "MemClock": "1900",
        "EXPIndex": "4.0 ", "TBP": "35 ",
        "DieSize": "67 ", "TCount": "181 ", "MProcess": "55 "
    }, {
        "Name": "GeForce 7800GTX 512", "Brand": "NVIDIA", "GPU": "G70",
        "LaunchDate": "2005-11-14", "LaunchPrice": "649美", "DirectX": "9.0C",
        "CoreClock": "550 ", "SP": "24", "ShaderClock": "550 ",
        "MemSize": "512", "MemType": "GDDR3", "MemInterface": "256", "MemClock": "1700",
        "EXPIndex": "4.0 ", "TBP": "110 ",
        "DieSize": "346 ", "TCount": "320 ", "MProcess": "110 "
    }, {
        "Name": "Radeon HD 6310", "Brand": "AMD", "GPU": "Wrestler",
        "LaunchDate": "2011-11-09", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "500", "BoostClock": "500 ", "SP": "80", "ShaderClock": "500 ",
        "MemSize": "512", "MemType": "DDR3", "MemInterface": "64", "MemClock": "1066",
        "EXPIndex": "3.5 ", "TBP": "33",
        "DieSize": "Fusion", "TCount": "Fusion", "MProcess": "40 "
    }, {
        "Name": "Radeon HD 4350", "Brand": "AMD", "GPU": "RV710",
        "LaunchDate": "2008-09-30", "LaunchPrice": "0", "DirectX": "10.1",
        "CoreClock": "800", "BoostClock": "800 ", "SP": "80", "ShaderClock": "800 ",
        "MemSize": "256", "MemType": "DDR2", "MemInterface": "64", "MemClock": "1000",
        "EXPIndex": "3.5 ", "TBP": "22",
        "DieSize": "73 ", "TCount": "242 ", "MProcess": "55 "
    }, {
        "Name": "Radeon HD3450", "Brand": "AMD", "GPU": "RV620",
        "LaunchDate": "2007-12-10", "DirectX": "10.1",
        "CoreClock": "600 ", "SP": "40", "ShaderClock": "600 ",
        "MemSize": "256", "MemType": "DDR2", "MemInterface": "64", "MemClock": "1000",
        "EXPIndex": "3.5 ", "TBP": "25 ",
        "DieSize": "67 ", "TCount": "181 ", "MProcess": "55 "
    }, {
        "Name": "Radeon HD2400 XT", "Brand": "AMD", "GPU": "RV610",
        "LaunchDate": "2007-06-28", "DirectX": "10",
        "CoreClock": "700 ", "SP": "40", "ShaderClock": "700 ",
        "MemSize": "256", "MemType": "GDDR3", "MemInterface": "64", "MemClock": "1600",
        "EXPIndex": "3.2 ", "TBP": "20 ",
        "DieSize": "82 ", "TCount": "180 ", "MProcess": "65 "
    }, {
        "Name": "HD Graphics 2500", "Brand": "Intel", "GPU": "Gen7",
        "LaunchDate": "2012-04-23", "LaunchPrice": "0", "DirectX": "11",
        "CoreClock": "650", "BoostClock": "1150 ", "SP": "8", "ShaderClock": "1150 ",
        "MemSize": "1720", "MemType": "DDR3", "MemInterface": "128", "MemClock": "1333",
        "EXPIndex": "3.0 ", "TBP": "44",
        "DieSize": "Fusion", "TCount": "Fusion", "MProcess": "22 "
    }, {
        "Name": "GeForce 210", "Brand": "NVIDIA", "GPU": "GT218",
        "LaunchDate": "2009-10-12", "LaunchPrice": "0", "DirectX": "10.1",
        "CoreClock": "589", "BoostClock": "589 ", "SP": "16", "ShaderClock": "1402 ",
        "MemSize": "512", "MemType": "DDR3", "MemInterface": "64", "MemClock": "1000",
        "EXPIndex": "3.0 ", "TBP": "30.5",
        "DieSize": "57 ", "TCount": "260 ", "MProcess": "40 "
    }, {
        "Name": "Radeon HD2400 PRO", "Brand": "AMD", "GPU": "RV610",
        "LaunchDate": "2007-06-28", "LaunchPrice": "399", "DirectX": "10",
        "CoreClock": "450 ", "SP": "40", "ShaderClock": "450 ",
        "MemSize": "256", "MemType": "GDDR3", "MemInterface": "64", "MemClock": "1000",
        "EXPIndex": "3.0 ", "TBP": "15 ", "Review": "502 ",
        "DieSize": "82 ", "TCount": "180 ", "MProcess": "65 "
    }, {
        "Name": "GeForce 7600GS", "Brand": "NVIDIA", "GPU": "G73",
        "LaunchDate": "2006-05-22", "LaunchPrice": "199美", "DirectX": "9.0C",
        "CoreClock": "400 ", "SP": "12", "ShaderClock": "400 ",
        "MemSize": "256", "MemType": "DDR2", "MemInterface": "128", "MemClock": "800",
        "EXPIndex": "3.0 ", "TBP": "35 ",
        "DieSize": "125 ", "TCount": "177 ", "MProcess": "90 "
    }, {
        "Name": "GeForce 7600GT", "Brand": "NVIDIA", "GPU": "G73",
        "LaunchDate": "2006-03-09", "LaunchPrice": "199美",
        "CoreClock": "560 ", "SP": "12", "ShaderClock": "560 ",
        "MemSize": "256", "MemType": "GDDR3", "MemInterface": "128", "MemClock": "1400",
        "EXPIndex": "3.0 ", "TBP": "40 ",
        "DieSize": "125 ", "TCount": "177 ", "MProcess": "90 "
    }, {
        "Name": "GeForce 7800GT", "Brand": "NVIDIA", "GPU": "G70",
        "LaunchDate": "2005-11-11", "LaunchPrice": "449美", "DirectX": "9.0C",
        "CoreClock": "400 ", "SP": "24", "ShaderClock": "400 ",
        "MemSize": "256", "MemType": "GDDR3", "MemInterface": "256", "MemClock": "1000",
        "EXPIndex": "3.0 ", "TBP": "70 ",
        "DieSize": "346 ", "TCount": "320 ", "MProcess": "110 "
    }, {
        "Name": "GeForce 7800 GTX", "Brand": "NVIDIA", "GPU": "G70",
        "LaunchDate": "2005-06-22", "LaunchPrice": "559美", "DirectX": "9.0C",
        "CoreClock": "430 ", "SP": "24", "ShaderClock": "430 ",
        "MemSize": "256", "MemType": "GDDR3", "MemInterface": "256", "MemClock": "1200",
        "EXPIndex": "3.0 ", "TBP": "95 ",
        "DieSize": "346 ", "TCount": "320 ", "MProcess": "110 "
    }, {
        "Name": "GeForce 9300 IGP", "Brand": "NVIDIA", "GPU": "MCP7A-S",
        "LaunchDate": "2008-10-01", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "450", "BoostClock": "450 ", "SP": "16", "ShaderClock": "1200 ",
        "MemSize": "256", "MemType": "DDR2", "MemInterface": "128", "MemClock": "800",
        "EXPIndex": "2.7 ", "TBP": "15",
        "TCount": "?", "MProcess": "65 "
    }, {
        "Name": "GeForce 8400GS", "Brand": "NVIDIA", "GPU": "G86",
        "LaunchDate": "2007-06-15", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "450", "BoostClock": "450 ", "SP": "16", "ShaderClock": "900 ",
        "MemSize": "256", "MemType": "DDR2", "MemInterface": "64", "MemClock": "800",
        "EXPIndex": "2.5 ", "TBP": "38",
        "DieSize": "122 ", "TCount": "210 ", "MProcess": "80 "
    }, {
        "Name": "GeForce 9300GE", "Brand": "NVIDIA", "GPU": "G98",
        "LaunchDate": "2008-06-01", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "540", "BoostClock": "540 ", "SP": "16", "ShaderClock": "1300 ",
        "MemSize": "256", "MemType": "DDR2", "MemInterface": "64", "MemClock": "1000",
        "EXPIndex": "2.4 ", "TBP": "44",
        "DieSize": "86 ", "TCount": "210 ", "MProcess": "65 "
    }, {
        "Name": "GeForce 8300 IGP", "Brand": "NVIDIA", "GPU": "MCP78",
        "LaunchDate": "2008-01-01", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "500", "BoostClock": "500 ", "SP": "16", "ShaderClock": "1500 ",
        "MemSize": "256", "MemType": "DDR2", "MemInterface": "16", "MemClock": "1800",
        "EXPIndex": "2.3 ", "TBP": "10",
        "TCount": "?", "MProcess": "80 "
    }, {
        "Name": "GeForce 9300GS", "Brand": "NVIDIA", "GPU": "G98",
        "LaunchDate": "2008-06-01", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "567", "BoostClock": "567 ", "SP": "16", "ShaderClock": "1400 ",
        "MemSize": "256", "MemType": "DDR2", "MemInterface": "64", "MemClock": "1000",
        "EXPIndex": "2.2 ", "TBP": "22",
        "DieSize": "86 ", "TCount": "210 ", "MProcess": "65 "
    }, {
        "Name": "HD Graphics 2000", "Brand": "Intel", "GPU": "Gen6",
        "LaunchDate": "2011-01-05", "LaunchPrice": "0", "DirectX": "10.1",
        "CoreClock": "850", "BoostClock": "1100 ", "SP": "6", "ShaderClock": "1100 ",
        "MemSize": "1720", "MemType": "DDR3", "MemInterface": "128", "MemClock": "1333",
        "EXPIndex": "2.0 ", "TBP": "33",
        "DieSize": "Fusion", "TCount": "Fusion", "MProcess": "32 "
    }, {
        "Name": "GeForce 6800GS", "Brand": "NVIDIA", "GPU": "NV40 A1",
        "LaunchDate": "2005-12-08", "DirectX": "9.0C",
        "CoreClock": "425 ", "SP": "12", "ShaderClock": "425 ",
        "MemSize": "128", "MemType": "GDDR3", "MemInterface": "256", "MemClock": "1000",
        "EXPIndex": "2.0 ", "TBP": "40 ",
        "TCount": "?", "MProcess": "130 "
    }, {
        "Name": "GeForce 6800Ultra", "Brand": "NVIDIA", "GPU": "NV40 A1",
        "LaunchDate": "2004-04-14", "LaunchPrice": "499美", "DirectX": "9.0C",
        "CoreClock": "400 ", "SP": "16", "ShaderClock": "400 ",
        "MemSize": "256", "MemType": "GDDR3", "MemInterface": "256", "MemClock": "1100",
        "EXPIndex": "2.0 ", "TBP": "90 ",
        "DieSize": "288 ", "TCount": "222 ", "MProcess": "130 "
    }, {
        "Name": "GeForce 6800GT", "Brand": "NVIDIA", "GPU": "NV40 A1",
        "LaunchDate": "2004-04-14", "LaunchPrice": "399美", "DirectX": "9.0C",
        "CoreClock": "350 ", "SP": "16", "ShaderClock": "350 ",
        "MemSize": "256", "MemType": "GDDR3", "MemInterface": "256", "MemClock": "1000",
        "EXPIndex": "2.0 ", "TBP": "70 ",
        "DieSize": "288 ", "TCount": "222 ", "MProcess": "130 "
    }, {
        "Name": "GeForce 8200 IGP", "Brand": "NVIDIA", "GPU": "MCP78",
        "LaunchDate": "2008-01-01", "LaunchPrice": "0", "DirectX": "10",
        "CoreClock": "500", "BoostClock": "500 ", "SP": "16", "ShaderClock": "1200 ",
        "MemSize": "256", "MemType": "DDR2", "MemInterface": "16", "MemClock": "1800",
        "EXPIndex": "1.8 ", "TBP": "55",
        "TCount": "?", "MProcess": "80 "
    }, {
        "Name": "GeForce 7100GS", "Brand": "NVIDIA", "GPU": "NV44 B2",
        "LaunchDate": "2006-08-08", "DirectX": "9.0C",
        "CoreClock": "350 ", "SP": "4", "ShaderClock": "350 ",
        "MemSize": "256", "MemType": "DDR2", "MemInterface": "64", "MemClock": "666",
        "EXPIndex": "1.0 ", "TBP": "8 ",
        "DieSize": "110 ", "TCount": "112 ", "MProcess": "90 "
    }, {
        "Name": "GeForce 7300GT", "Brand": "NVIDIA", "GPU": "G73",
        "LaunchDate": "2006-05-15", "LaunchPrice": "99美", "DirectX": "9.0C",
        "CoreClock": "350 ", "SP": "8", "ShaderClock": "350 ",
        "MemSize": "256", "MemType": "DDR2", "MemInterface": "128", "MemClock": "666",
        "EXPIndex": "1.0 ", "TBP": "30 ",
        "DieSize": "125 ", "TCount": "177 ", "MProcess": "90 "
    }, {
        "Name": "GeForce 7300LE", "Brand": "NVIDIA", "GPU": "G72",
        "LaunchDate": "2006-03-22", "DirectX": "9.0C",
        "CoreClock": "450 ", "SP": "4", "ShaderClock": "450 ",
        "MemSize": "256", "MemType": "DDR2", "MemInterface": "64", "MemClock": "666",
        "EXPIndex": "1.0 ", "TBP": "10 ",
        "DieSize": "110 ", "TCount": "112 ", "MProcess": "90 "
    }, {
        "Name": "GeForce 7300GS", "Brand": "NVIDIA", "GPU": "G72",
        "LaunchDate": "2006-01-18", "DirectX": "9.0C",
        "CoreClock": "550 ", "SP": "4", "ShaderClock": "550 ",
        "MemSize": "256", "MemType": "DDR2", "MemInterface": "64", "MemClock": "810",
        "EXPIndex": "1.0 ", "TBP": "18 ",
        "DieSize": "110 ", "TCount": "112 ", "MProcess": "90 "
    }, {
        "Name": "GeForce 7200GS", "Brand": "NVIDIA", "GPU": "G72",
        "LaunchDate": "2006-01-18", "DirectX": "9.0C",
        "CoreClock": "450 ", "SP": "4", "ShaderClock": "450 ",
        "MemSize": "256", "MemType": "DDR2", "MemInterface": "64", "MemClock": "800",
        "EXPIndex": "1.0 ", "TBP": "8 ",
        "DieSize": "110 ", "TCount": "112 ", "MProcess": "90 "
    }, {
        "Name": "GeForce 6800XT", "Brand": "NVIDIA", "GPU": "NV41",
        "LaunchDate": "2005-09-30", "LaunchPrice": "399美", "DirectX": "9.0C",
        "CoreClock": "325 ", "SP": "8", "ShaderClock": "325 ",
        "MemSize": "128", "MemType": "GDDR3", "MemInterface": "256", "MemClock": "700",
        "EXPIndex": "1.0 ", "TBP": "50 ",
        "TCount": "?", "MProcess": "130 "
    }, {
        "Name": "GeForce 6800LE", "Brand": "NVIDIA", "GPU": "NV41",
        "LaunchDate": "2005-01-16", "LaunchPrice": "200美", "DirectX": "9.0C",
        "CoreClock": "320 ", "SP": "8", "ShaderClock": "320 ",
        "MemSize": "128", "MemType": "GDDR3", "MemInterface": "256", "MemClock": "700",
        "EXPIndex": "1.0 ", "TBP": "40 ",
        "TCount": "?", "MProcess": "130 "
    }, {
        "Name": "GeForce 6800", "Brand": "NVIDIA", "GPU": "NV41",
        "LaunchDate": "2004-11-08", "LaunchPrice": "299美", "DirectX": "9.0C",
        "CoreClock": "325 ", "SP": "12", "ShaderClock": "325 ",
        "MemSize": "128", "MemType": "GDDR3", "MemInterface": "256", "MemClock": "700",
        "EXPIndex": "1.0 ", "TBP": "45 ",
        "DieSize": "288 ", "TCount": "222 ", "MProcess": "130 "
    }, {
        "Name": "GeForce 6200", "Brand": "NVIDIA", "GPU": "NV43 A2",
        "LaunchDate": "2004-10-11", "LaunchPrice": "199美", "DirectX": "9.0C",
        "CoreClock": "300 ", "SP": "4", "ShaderClock": "300 ",
        "MemSize": "128", "MemType": "DDR2", "MemClock": "550", "MemInterface": "128",
        "EXPIndex": "1.0 ", "TBP": "30 ",
        "DieSize": "156 ", "TCount": "146 ", "MProcess": "110 "
    }, {
        "Name": "GeForce 6600GT", "Brand": "NVIDIA", "GPU": "NV43 A2",
        "LaunchDate": "2004-08-12", "LaunchPrice": "259美", "DirectX": "9.0C",
        "CoreClock": "500 ", "SP": "8", "ShaderClock": "500 ",
        "MemSize": "256", "MemType": "GDDR3", "MemInterface": "128", "MemClock": "1000",
        "EXPIndex": "1.0 ", "TBP": "55 ",
        "DieSize": "156 ", "TCount": "146 ", "MProcess": "110 "
    }, {
        "Name": "GeForce 6600", "Brand": "NVIDIA", "GPU": "NV43 A2",
        "LaunchDate": "2004-08-12", "LaunchPrice": "199美", "DirectX": "9.0C",
        "CoreClock": "300 ", "SP": "8", "ShaderClock": "300 ",
        "MemSize": "128", "MemType": "DDR2", "MemInterface": "128", "MemClock": "550",
        "EXPIndex": "1.0 ", "TBP": "35 ",
        "DieSize": "156 ", "TCount": "146 ", "MProcess": "110 "
    }
]