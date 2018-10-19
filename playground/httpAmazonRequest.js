const request = require('request');



  var options = {
  url: 'https://www.amazon.com/gc/balance/ref=gc_balance_legacy_to_newgcf?ref_=ya_d_c_gc&_encoding=UTF8',
  headers: {
    'authority':' www.amazon.com',
    'method': 'GET',
    'path': '/gc/balance/ref=gc_balance_legacy_to_newgcf?ref_=ya_d_c_gc&_encoding=UTF8',
    'scheme': 'https',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    //'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'vi,en-US;q=0.9,en;q=0.8',
    'cache-control': 'max-age=0',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
    'Cookie': 'session-id=137-7284381-0862301; session-id-time=2082787201l; ubid-main=132-5731608-6131340; lc-main=en_US; x-wl-uid=1XmrNTmDxFzslNMJkMez5m/2YCSbdi5z/JJJNcCJfCqkgBoCEFrVKH7juk/lROQOtURU2akUJLd7yL+rxizRgN82cyB7UdKQNYhPwcnvMdu6sG0fM0yoyvsAAyYCmZrJglNYV68uqNos=; skin=noskin; JSESSIONID=DB7D68BAFAB2EB37518F343E633FEA35; s_fid=36FCCA9172B8C786-1E3D979FE00A5423; regStatus=pre-register; c_m=undefinedwww.google.com.vnSearch%20Engine; aws-priv=eyJ2IjoxLCJldSI6MCwic3QiOjB9; aws_lang=vi; aws-target-static-id=1538282284361-46363; aws-target-data=%7B%22support%22%3A%221%22%7D; aws-mkto-trk=id%3A112-TZM-766%26token%3A_mch-aws.amazon.com-1538282285143-35155; appstore-devportal-locale=en_US; AMCVS_4A8581745834114C0A495E2B%40AdobeOrg=1; _mkto_trk=id:365-EFI-026&token:_mch-amazon.com-1538282429257-48305; aws-ubid-main=934-1441223-4804320; __utma=194891197.1267542320.1538282717.1538282717.1538282717.1; __utmc=194891197; __utmz=194891197.1538282717.1.1.utmccn=(direct)|utmcsr=(direct)|utmcmd=(none); pN=2; s_pers=%20s_nr%3D1538282955726-New%7C1546058955726%3B; s_sess=%20s_cc%3Dtrue%3B%20s_sq%3D%3B; s_cc=true; visitor_id49692=224288413; visitor_id49692-hash=d4ceb7d8c98c02ba09058d89d3e732bdf9a8fe1af01510f7850bcd7e0e5a7b9e683a21c4fe99e1c457cd3f0bd0fd58890c4a2a40; s_vn=1569818272061%26vn%3D3; aws-target-visitor-id=1538282284364-617914.24_12; AMCV_4A8581745834114C0A495E2B%40AdobeOrg=-330454231%7CMCIDTS%7C17805%7CMCMID%7C52561812042865147931035324393176341883%7CMCOPTOUT-1538300668s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C3.1.2; s_lv=1538293681123; referrer_session={%22full_referrer%22:%22https://www.google.com.vn/%22}; s_dslv=1538293684387; s_nr=1538293684389-Repeat; session-token="YxMpdt/0gg40iFNwvQFYCK1WedKtXD+xwk6KOqDzIPtAkGnJSIyjIaa+/sS4DWbQj+L/s/IM0sCigF5edEfnIe9aXApi+HveIRDZAfCszV1yMMiu/acrAgTZJM7EDmoiKQSBS9j/1sSZCumKyc9CA7r1zcGfBoMDWKYBChrsMjBWD9H0hoQ4A/E4S5wwz178msL8bAB9ssNvUgBQLy+dcerusjayPWipbF9it1XLpSY="; x-main="dsciqMT@yiPM85RVBZKqBk76@WAy1jcmgcDSfKDUr5dZp4LvPnWg6egKM3Y5zyrc"; at-main=Atza|IwEBIAB6g5IA_hZDMa_DzxQITD2bHD6KN9vqbV372KOSJR_ONWBD5MCtfeJaUGSrbJeH7PeeB9TBeA7QihJV-CelIlisQ6TGCUZhfP34zJxSxobTTYw-c-8DLcJfufLLoz8SsRrC1zYYB4biozenaBDmgLHKq5i7QF7G9LeXyCnNVOwotRkP2g2p12D6vmXLv6X5uNkKcJmurFDYYo3xyenEIbq7Z4dZ5qHffgTTBRykKY9DSrmFz0cfXo-PAJ7Ss0sS3JTyAeq82IGKN7ClkK4846Fnfo9XuQAYwOdqncnRhbPPklF3Y97fxq6h2suJ0N_dMwcj8z5OO0xKXS0Tgiy_fRrZ6YGHW6WafMQFZLyFLot2aGPrSDX5uX2rFiNjdWg0IfYxZ-1iy-KqpuonGD_q2sM9; sess-at-main="ZJpk01wyfid7ZZftybXTtLQNis9le2Fd8UA5SIErAEg="; sst-main=Sst1|PQEJHkl_fF7jBDLl2OvsHB5MC62kvJuOMlx5rOZHjZEdMdjeB4Ss_qTRD47uOEtPSxokvmSiZSSR0x2pkx5GNWdCfJ3S7Ckcv5WPl19DmB_fh99a-yKosh_tDZWTRkquWRP4rmJNRBuQd5OtwJOqrEuAkyW5Z_zp67SmXxI4rLNtK9hDWq4rPz9w-DC3VGdzywCD4D47eZ40BV5kMBiqWjz88bSW4_6lfuIurOv3exWI4jZKQ0Q1-63rddboNKVlOiZ0n19Iyw_626Qm9S1BkM21-rwUfwF7rX9XXxyB1PziHNpbiDSYln65S1d1D2zvnJ8QaOJImIXJjYudI9tk-HUF-A; csm-hit=tb:s-W2J8EP4JKDYNDJRSGAKY|1538461055078&adb:adblk_yes&t:1538454278174; session-id=137-7284381-0862301; session-id-time=2082787201l; ubid-main=132-5731608-6131340; lc-main=en_US; x-wl-uid=1XmrNTmDxFzslNMJkMez5m/2YCSbdi5z/JJJNcCJfCqkgBoCEFrVKH7juk/lROQOtURU2akUJLd7yL+rxizRgN82cyB7UdKQNYhPwcnvMdu6sG0fM0yoyvsAAyYCmZrJglNYV68uqNos=; skin=noskin; JSESSIONID=DB7D68BAFAB2EB37518F343E633FEA35; s_fid=36FCCA9172B8C786-1E3D979FE00A5423; regStatus=pre-register; c_m=undefinedwww.google.com.vnSearch%20Engine; aws-priv=eyJ2IjoxLCJldSI6MCwic3QiOjB9; aws_lang=vi; aws-target-static-id=1538282284361-46363; aws-target-data=%7B%22support%22%3A%221%22%7D; aws-mkto-trk=id%3A112-TZM-766%26token%3A_mch-aws.amazon.com-1538282285143-35155; appstore-devportal-locale=en_US; AMCVS_4A8581745834114C0A495E2B%40AdobeOrg=1; _mkto_trk=id:365-EFI-026&token:_mch-amazon.com-1538282429257-48305; aws-ubid-main=934-1441223-4804320; __utma=194891197.1267542320.1538282717.1538282717.1538282717.1; __utmc=194891197; __utmz=194891197.1538282717.1.1.utmccn=(direct)|utmcsr=(direct)|utmcmd=(none); pN=2; s_pers=%20s_nr%3D1538282955726-New%7C1546058955726%3B; s_sess=%20s_cc%3Dtrue%3B%20s_sq%3D%3B; s_cc=true; visitor_id49692=224288413; visitor_id49692-hash=d4ceb7d8c98c02ba09058d89d3e732bdf9a8fe1af01510f7850bcd7e0e5a7b9e683a21c4fe99e1c457cd3f0bd0fd58890c4a2a40; s_vn=1569818272061%26vn%3D3; aws-target-visitor-id=1538282284364-617914.24_12; AMCV_4A8581745834114C0A495E2B%40AdobeOrg=-330454231%7CMCIDTS%7C17805%7CMCMID%7C52561812042865147931035324393176341883%7CMCOPTOUT-1538300668s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C3.1.2; s_lv=1538293681123; referrer_session={%22full_referrer%22:%22https://www.google.com.vn/%22}; s_dslv=1538293684387; s_nr=1538293684389-Repeat; session-token="omvt1m8myROW0BKZoxef/t3BuSSL4e8mzj+du8ALqo0cRbj/mJdvGWI0fjGpogXsgNlx12ijLac91eVVADFUaVcnmL1275O+D835GPbJI7841c5PxB8nSMY4PceW/+YD3miXBDLGaGOyhmtmfcHu+BxCdscb+5dNATbK9sR9ue49/1g7+3s/VpqlHu1YHibdlZkGU11xoUbjKJvsIcIg1Lpq42tR3l1gSrF3Z/LTQRM="; x-main="5VNimS5j@T1u4FMt3ZdML7j9ASk3WhSlk6kvL1SIeZihtnaVwN1AwnzoCOOHHbTf"; at-main=Atza|IwEBIH5ieClxJHRUwM5aUp-YeTLv5uSMTfJB3AkzkNhpUYgNH7aIvACr-J4s0nEOX5CHfDIHsiAWqJoIlCZVx7ATwA-EYJ-YW4roJsglF4G9XN8HLZAABUxRKaFYom8LxnwY2nU41XHAnE5mKwTYjPZSbCaV7poRlgPdiYrkJwBNRdUFLqytDGDxBcaGWyW92mN6gqXCSMB_RnpRutezavv5f0k0LJEErqMQvECE93778ctAk3uRYDN6HtBVlY9pqT0gV7-eELBN6Onl9norTM3xTUIJvtDXbMNuEHmcsr3cqVrjs5pM_qD4-oPadXqHqDSKz8pkuiTHDR800H0AbOBIuSgrQtMOC9-t741XiFGlrreLb5CppG1CTRX_uSua2ohBFTMs9qz6XMiI41kRFGG5MshW; sess-at-main="xOcNkuBjGfUWFyMVEu1D0g21ccStGb/04FcLFiYtkBI="; sst-main=Sst1|PQEfFxbfl8Y3SlEI4lK_ueGrC7nSHqUXuyQpQMAO3w68pxbj5gghUGXr3-CxF22r6Q5gj4-YQ49xPivkDEWylC6FqGtbBVuqBDGPhZ8armGTqRUPkiB1H9Tv0oWTUMvLXg1S5D-A7rbTIcwWpfY-ZJsBxxbYrdF2g7vko7iWonS-UFSYczFPDqxld4z_RKU9StEexqnrhGgCvujiY2TOTuL272RFgUJ2qTpgaZzcVAi8uyzIctFaWXXGPNdhpDvtQftCtVoqAlCYcNsfxwLzm0dHT_PEqw5evRXhxPLh2FFK9_D-Pdvv5CrB8mfa0Dc3okqgUL3_-xstaeEuZlkiOxc_oA; csm-hit=tb:s-JYD7NPZS84X6V8GNDR6W|1538463407190&adb:adblk_yes&t:1538454278174'
  }
};

var geocodeAddress = () => {
  request(options, (error, response, body) => {
    if(error){
      console.log('Unable to connect to Amazon servers.', error)
    } else if  (body.status === 'OK'){
      console.log(body);
    } else {
      // console.log(error);
      // console.log('----------------');
      // console.log('Response ');
      // console.log(response);
      // console.log('End response');
      // console.log('-------------------');
      //console.log(response);
      console.log(body);
    }

  });
}


//  }

geocodeAddress();





module.exports = {
  geocodeAddress
};
