import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {

  constructor() { }

  foodDetails=[
    {
    
    id:1,
    foodName:"Paneer Grilled Sandwich",
    foodPrice:200,
    foodImg:"https://static.toiimg.com/thumb/60043279.cms?imgsize=195460&width=800&height=800"

  },
   {
    id:2,
    foodName:"Veggie Superme",
    foodPrice:300,
    foodImg:"data:image/jpeg;base64,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"

  },
  {
    id:3,
    foodName:"Paneer Burger",
    foodPrice:149,
    foodImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8VHdzwjDv4sYZa8LrZvK6WM2LUzgOKeEqA&usqp=CAU"

  },
  {
    id:4,
    foodName:"Veg Masala Roll In Naan",
    foodPrice:140,
    foodImg:"https://i.ytimg.com/vi/V4qjZLxuKTs/maxresdefault.jpg"

  },{
    id:5,
    foodName:"Indulgence Brownie",
    foodPrice:105,
    foodImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFEoPOou7Fkjt8mw3s6MkWlwXNr2zMV8eWTw&usqp=CAU"

  },
  {
    id:6,
    foodName:"Oreo Cheesecake Ice Cream",
    foodPrice:219,
    foodImg:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFRUYGBcaGxsbGBsaGxwbGxobFxoaGxogGhcbICwkGx4pHhoaJTYmKS4wMzMzGyI5PjkyPSwyMzABCwsLEA4QHRISHTIpIikyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAEYQAAIBAwMCBAQCBwQIBAcAAAECEQADIQQSMQVBEyJRYQYycYFCkRQjUmKhscEHM3LRFRaCkpOy4fBDVNPxNFNzosLS4v/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACMRAQEAAgEEAgMBAQAAAAAAAAABAhEhAxIxQQRRE2FxMiL/2gAMAwEAAhEDEQA/APS7egPcxT2W2nOTSGnuN8zx7CkdPbXLGfrTJE+qZsW1qnouh3N7Pcuk7uF7Ae1O6j8U6awMuo9pE/lWM6r/AGks0ixbJ/ebA/LmqmNpbkehnwrQkx96zHW/j2zbJS3539F/qa841Wv1WpP6y4dp/CMClpumhK0x6X2i5/Sx1vrGq1DQzFUP4VP8z3qjptIFq+7j0qEXgO1bySM6dc4qqytFSvfJ9q41wxmrQrERzTWapwwNV9YQqM08Ami+AzN7dcukMM7wI+8fwEV6N8TImm0ilLclQApZjCCNqsikwTPIHMmfWsn8GWDc1AwSBLMZ7QRzH4j+eQa0X9pWuC2bVqMuSS3oLZGPfLV515runEBPgNLdwvbuI8+QI9ud6MxIExyp/hn1Na29pXYPpbsM+bmnuLw7KvmUftTtM9/rE0D/ALP0K271xXh22oI2kAhHbdLCA47TjkHkQe6pqLtvU2xcIUotu4gEbbZQKtxQQQCpy2TtlV+8y6u4013Y6ZZTiuuk1Z6rZ2Xrq8AXHiM4LErnvgioFGMV6mPMeZlxUSiuzUgU+lcUD0ppNFcmpX+lc2rIzQEZpA1bazjFQFKeiQ1zbVjw64UpaG0NMZaseHS20aG1fbSqxtrlLRtLrf7Rrzz4duPdj/QULudQ1d7Ny4209lxTk0aDtRCwy7YArKdLGN++qmg6Khywn65ora6bbTkCq9u+w4p+qunbJ5p9o7lq6lsiFAodetnPaoFuGe9R6h3PrVaLe0V1Gqq2Oath2prndyKWiqkxpM01YfSAjBioBpjMA0cpqMUN6/qYthBy/wDyjnP1iiz6cis/8RGWtiOBmfcxx7RU9W2Y1XTm8ml/s208C6x5BUT22kFv+v3rPfFOpe5fAZiQA23zboVmY47YkiBjAEmJrZ/DF9dLoTcvJtBJMYO+SAIX34isH1XWC/ea4AFUwEXA2qqgAQMe+K4Xb6bf4DtN+jMECBmci41xYKW2TaCpGSCQ0D1EY5rQa27bS2LKtsm2ybriFXuMoCIN3KksdwMTIxihXSLr2LaKhlwEEkCNty3uG7cPmS5ug8BTGad1bSajw0a6hLC9b2nlpUwxIjd8p79kX3qdttaih1whtRdjmRyGH4V7P5vzzUJslVqz1ZP19wxBkYClIhQI2MSRx6+9Qu5I4r1On/mfx5PU/wBX+oMRHeokf2rrpTSIFVtJrvPtTdtdgfSlFIH2nIMdqlaq+3NW0gd6cosMIxTGxU4AJiuvYHeqTpV3UiMVMbQ4p3hADmgK1KrHhiu0ao2nLzXUuRUE10NWbdbXUkCu3NTMTVYjNNIzQFm7dA+WmNrGiKg4NcKGJqQ613momaurXLgoTaazmuWWyaY/1FXbHTb7KHWzdZDwy22Kn6ECjc9lz6Vy5UzM1lutXhdug2zuwF4PMnj860eu09zwrpCMQqncdpIUcncYx5Z5rJaGw9y6iJO5nCiORJjn6TWHyM/Tfo4+3oHx84t6ezagz8ywBtm2u2D9m/hWC0VosAqiScCOSWkR/Ktj8d23zeZQrMFtXFklWcruDICARjv+Xegvwjo/Ev21MDaVfOAQjiY7TEn7Vyb4dcnMj0C+5RIULvVNu6MwttwT5pDY3AkjIY8RUyMwFwsk+KNzkbrig+W2Nqr5vlBJyTHtULOZYsygWdodR5/EYoQMHn5182V8uTioNY36y24ckJba4JZgT4gAWWHyvAMcCQB9VjLttlZJsLuXAzswAgkxExE4icx9aTNHar/Rui3NQLnhxKLuae89hjkwfyqgpINevhZ4np4uW7yjuD25qs8Crtw9qSacRk1Vm0zgLenKMVYv2QpxxTEWo0e0Sj1rpNThKW2aehtV3GatLcbvSNunR2okG3UeugA1wL71Iq1UKlsFKnxSplo1ExMVxSKt2ryxwYimsqk4HPesnRUSRTnt964Vg04vQkx0puzBFEekaA37i2w0TJJicATxWu0fwtakx4hKNBL4ViIPlECR2kEjms8+pji1x6eWX8efKlPtaVnYIoJZjCgZJP0r0+z0DTeK5Omjy8zKNu+aEJ8rCORHOKdo+m2LFxRbUo0bvUkcCWJJ5B9qyy+TJOIqdG75ZbpnWhYRlTStcsqilnVVDu6swdlJM3DM4gQBgmQKPaXrCatb1orctwu1leVMOsjawM8fljNXL3RE37luOogAIYKggk7gcNJmCCSMCh2j6V4I3eM152YbmuMq7FlsoiDaTDAFeGjtXBcsvddUmPoP+LurxoL4navhlASS0lhsUZySeJPrNeTfB6k6y1tG7zEkTkgD+ea9h690S/f015LD2Wd027YK7txO4ySdnlIgZypzkRlfhX4B12luteuHToAhUFnkSdsbtq/Lj1Haqxu5yLqUE/tL6nvZLQtbYhixA3MYhQY7iXH8sVB8Bv8ArGBXdtQjbhcFgxLv2QEZnsR6Vq+tfBKsS+ov3CwiLlu1cMuIC/q4KssFfNukwfQk0/hn4dtajUXbaO5dGPiXDb2wSCdwByysYG1mkfMMHBua0rGc7d6g7+IbGnDM7oPCQIslEwCWb8IljkE5Ag1urdq1ce1Y1AU3gieLA279owHZcNJg7O3PsQnUOiaiwGTTfpDXXe2/iiAm1TLoEUgKIWY7lueaM6H4cZANRYZ0u3AvipvZRAydoafMDABJgj61O7vg7qzlotB0e1YZ2tLsDxuA4xPA7c9q8n6wp8e4GXad744jzHtXqn6XfQhTa3yQN25VlmyYBjyKs5yTgRgms98Y/D/iXUuIAXZdpSVDMVE7lDEbjGD9BXZ8fqSZXftxdXC2cPP2s4rvhtFSbCrQ6ssftAj+dPcKcg16PFcdmld0kQarskVb3+tRus0aJAtPe2QaaiwYqw3vRo0K011zTyKdNGgYi09I700GnBBE09EkhKVQ7aVGiPe6SoxipHEx9KhS+TAUYiKiDGeYrHboSKDzXQM1ELjRzUtoyY7+lBCPRXNq+jBivmVTHfceMfWvS3ZyRJLKAVdICjPfdzOO1eaWQbdy2SSCCLhBwYBXI7+32rUJ1a+LjXyZsuttbaEHdvJAXaqGAh3EknPvAx5vUy3la78MdYxpn1aAAkhQSB5sQScCSIJmhF/VBrm8sDEhdvEAmCfczWB6t8baqxdK3VUMEB8MiVVy4mXGYNsNgD8QkVoG6ituyt64IlVIXazQziQCFBIEnmss7dLxkbPRoLgDHCx3+v8ALFLUaI3AxVQpnG4nzDvhflkzHPEx2qj0bqDPbRmUqxUEq3Kkjg1b0R8BLj3Lz3JJdi5EKAMhVUDaoAGKWpZqlzLwptobiAMCVMcHtIzwSP40OClSx2mW+YyTuwB5gecKPyol8P8AxBb1jO9tptkDw1KQ3lJDsTMEEsuMERxRZ9GmTAzzWV6Mv+V99nFBD1hxhv41c6Vq7YZmiGYAHiIWY7T+I81U1aHx7dsWbjq4Ja4u3YkDG6cmc/TFd13TBbUuW2gAkmYAAyTNLWWPPkf83jw0f6ZbwC6jcdoBIyT296q6HxEYWyi7FBhl8qAT5VW3J4jMxyI9AI6L+ssi8txXjII9CARu7gwQfWCKMdNvs6b2ECeTgR3NaY9Tusl4qMsdSrN6yr3ELIpKS1tifMGIIaFj9k8z3qQIj7HiYkqSCCJBHBzwT+ddDLIgiSJHuPauC2x3BmwY2gCCo7+YHP8ACt2Yf1x3RdyW/E/c8uTmJ3Yihb9I095AXsoj/iABUA/iEoVMTPrR66xYsFjA5PE1l/ibUuENtbVw7zsLorMBjyhtomCYBPbj3qe/KcyrmEymqz2o+Ghd3NpLqXFVtrIWjbgHy3GgOPf+dVtV8K6m1bNxkDKMtsbcVESSR6fSa22h6TbS2q2tqcg7DgN+KfUzzPNPtJcUFfFD7YDccwD5gOJma3x+V1J55ZZfGwvh5ZcYDMZrm/Ez9q9Ev9CsPv8AFVtxyLikKQAoEcQwHOQT71VToto27lu1aDMyGHYBnDqhKkHG2SBgetdE+XjqbnLC/Fy3dXhh0JiK4ZFcQ4mftT0uftV2RyOBPepTaAEyKa5GM0ldBzn2oNzFKn+Na/ZP5UqZaP6boL1wKLdtnz2GM+5xWj0nwLcuENdZbY9F8x/Pj+db9FRBCgD6CuNfNebetl6d86c9s9o/gnSp84a4f3jj8hAo3pdBZt4t20X6KB/KnwTT105rO5W+auSR5n8WubjNct7SxdkB7KstuaQcxsx7ipOk9VtpbtWrhFs208reZA7WwZKnCsqqMgzkiiHWdLtuOiCFDEwANogOSCfwSSuftFYTqvVblt3sqiuC0qSi3MtzBM7YgQCOPrWNbzwtfE9u1fJbapPIdYJcEd2zP8K0ug1q3FBH39jWD6o+r8NAbcXGknasMFkgKRA2nB4xEVP0TUvYA3kmfmjMEe/fHNTnOFY3l6XoboUADgVavdLtXn3sNzbGQD9143CODMCs5oepW2I/WKPYkA/kaMJqytxXQ4Hvz/Sst/arj9C3R9Fb0qG3a3QWZ4JnLcx6Ce3arrX2JBG7E44BxGfWgR6yZzJPfPr9KgGquFpVmAn1OKrvR2XzWk0vUQ1xrZWGGRPeq9m41lG/Srq3Xe43hgKo8rRttqpMEqO/1NDtNduFtzkE8TAmPrTtZZFxkNxdwW4pHnKwAQd0gcz+HuO+acyui7ZtpNNbYM2RsMQv7IAPtmT+UCrQcAxVVdSojIPr612xdBJPvitIzp95FUKQm7aQBABKgkCR6ADn2rmv1exRiSxAEAn6nHapXuwMZPoKoshJ3MPPGB6d4+lFv0JPtFfa4mFVXB5zDdyIBweKmTWoTk7SAJViARPrmn6G6WXzFDcWQwQkgHmJIniKi1+mtsrFwIjk9vvRJqcK39klu3akKu0MSSFXEnkwopjOfFNvw4Uru3yB5p+WPpVfT9Pu2mLI4dT+Bvm7YV+wxxxRDTXw57qRyrcj6enNEOhPUluFlt7P1bGHfcQQv7nq31q/YsJbO4ERMnAnIEEn6CrTbTge2Y7n1FReFIx2OR2I5waek7eTfEelFvV3kGIckCMQ3mHHaGocxk8Vovjq1GsJj50RueDG3/8AEUACc16/Su8ZXmdSayscJiO/9KjurPfNPUZ5rtxNsHcD/SrRFaHrtT+OfQUqWje3LpvU0nhRhS30rrPTd1eS9JIrGBwD7U7dUO6ug0Bl+qXQt9h6vkLJkMBJIH1nPdT61l9Po08W5NtS0M+ThiSeSAcbj7/LR/X3CLl4kyouAEEkEEuCCG42wRwJyKD9Y0txnVbTEXXc+GQ20g/OAxyIlGMe4rOtcVjT6AXvPcDWy3byjGIJEk4nggcnGKj13wZbh9hYN7gMpP8AhERP1j+up04Nu3vupFzaWfaS4BjIUwC3yjt3xWH1J6jq3X9HQ6a1+sYq9za9xXcncZJYdu0DtPFBzaJ/gm2Wjc8qVkA8AgnO2ImO8VzU9DuWv7u687gIGVHpIPb6VqNL8PvYPitdbcthUUEfqwVXaNxXzXInG7j2rLte1jGf0m2zK8G3b86sSQdu7aO4iJJ83pU2fapTbHUSkKxRrpYIJ3KCzA7ZkGEYgqGEieYo3ptU+N9soseYsCCGHaCII5zNO6r8Fm+lss+1uWCABVdmltq+m4eufaa0nSunXLVhbdy4XZThwSNwgDjt3G3PbvU/jO5wNt6u2AIdSe0H+tT6HqCbSrmTuJB+tDeq27d4NtVX84QXApXYJG9hcURcG0xMEAjPeotZ0C5p7Lfou665DBd9wA5mGBICkj0wcijtvouPbVWtr1dsIizmY5zx9T2rO/C+puXFZbiFWQjyuG3gEmFO6BIAAnPEnmtBqGtv+ruKIwYaIJztx34mqxm+U5TV0ZbuOGkgMpGAv4R9Cc85Iq2p7kH7TH5Vnusm6120Ao8PzBoBbsYGwRB5y0rx3iiml1DFni4jBcBQuQRBO9gfmggRjgU55GU42vWvMJAODjIM/Qg4HtUeousg3QSBJYTJgT8kDLdoMVXv64JwwPIEERuHaCfmjPNQ29QzbQ6ujBVdiCrAMTlcjPEccenNUjQgLwKyoJwPyP1qrrSkhrkQCOQMEHHOT2/yqHVatbau5YIEClt5hduScHg4iale5vEYIIzhoz7ge1PZ6qTTuVXJDe4mSTPbNMvXFlvORADALM4EmTEeneuaG5bYShOCE28dsQPp6+lR9S0DG3CCXaAzhtjhQwIKuAciJiIPFMvasXt6hdmosrHY7g0ScQ0Agj1GKzfV/ghgC+mfxF52MRu+itw33oto7bW1CPca4wnc78sZzjt9KIWL7LwarDq5Y+EdTpY5vKG0rKxDAqwMEGQR9RXVt+terdQ6ZZ1i+cbLkQGHP3/aFYDrXRrmneLgMH5WHyP9D2Psa7+l1sc/64ep0ssP4H+CvtSpvgn/ALNKtmT2LdS3VRbVCoF6kDOCIJGREx3HtXk6emLBqeGoHc6sBQjqfxdbtYZ1Un5ZmPvQcgboJuJdVgTvJYsDgFyWM9wYtrHbzV3TX2a7bZkYQ6XGCxA3FQTOAc7hHMA8mBQX4V6jut30ZgSbhG5OAGQ5E57VolFwbCrJ4ZLFgVDCTc8uw7hsiWkmcms61gzf+IdrlFQNtPrBjA/zP5VINfbvWCUc22mOcrsYbsryeR96zrugNx7gCpuJYtA3iIk/cY9cV1OqWhYW4hJUs0ACDkn5lJBEHP2pbPTV3tangFnuM8jaShVWEgKdsxtHLZM/wFB9fq9Lpba6m3p5Z/NhQjsWkgMWA2knO3/s55mJhXktvUyqFVAJJWQcYOO/biaH/FXV96ItvdcUMd5Q+ZQndkGTz3/zpcjUb/oHUluIbh3kOSxBki2wHyg8ASvHq3vVvT3na9sZQtpgQA0HeSNxMCAoORmZrE/BPxMLgt2wp2E/rHmIZUU4E4GM8Sc/X0a642GCJzEZg+0/nFVPpOX6QWOlpZE2raJwCohVgQAJjyqo7DHPrUq7A5GeJMcfUH3EflQ3U9SdWCAqCNu5mBwDGIGNzZIHbH0Ldb1FGZbRcpKFmggNbLsEQnBXLEgSezYO0w/BaqW7odO7btqAg+ZkhXnBIJXOe4wSCfU07qtm3cT9YcKQ6zIXdypI/EAcj3AIggET6S7u3AArsbbuPBIUTGfNGBn+lOS8WJnaQI2sMTPMjtBjPufSiSC2nOTGCN0d57+3f6VXsaRbZchBNx9zEzk5yRJzEU7V3/CgMQLcE59ByMn0BNU7PWrbXBatecid0CQgAMc5zgRnnNITfpYXSBm8RGzB3EjBBEgjMDgZ/dp5KvbY7p2mCRgyD9vWg/W9a1k2nMzu2hZbaxuCBNr0BP2MVc6d4tyfE/u5BUKR+FpGYyI9+fajZ642GfEWiGpuWka4BatsLlxSV3brZ3KSxBgQIgQc9xWr07gAFl2ngZmZ9/8A3oXf1JW5CWi5gBgPKYyVOYDGR/E1bsuWYrKbQPkA8688tMEHA+xzT9i+EV2zvujbIVYJ2/jPoZ4HrHpVy9fPhsxO2FckHgBZBwMkd8VH+jhCGBPfvxgk9pzA/KsF8cdccg2PCEBVa5uDwvjFlQMJBb5WbcOCB6Gi3RSbG9D1/S3921z5YG5hBcmJO0DA8wzAGTxFXnVk9xXlNretxLphmUFZaTO0qfxTOAR9AR3r1foOqt6myjYNxVyJyoJjHtiPsRRPqnfuHo85HNWw6XUNq8oZT6/zB7GqOq0rIZFNt3Qw9DT3caVkyhf6lab/AOZd/wB4f5Uqm8Rv2qVX+XL7Zfix+ga5qDVS5eNOumqV9qKqRDqdVWM+L1lVfbJyJ5gc8Uf15cq2wgNHlJEgH6UB0ty+xKXkkACGH4j3mpWk/s91G0Xg07F2EkTIOVHbiGoz8Q6DVM6XLd1ktISyKDKg7yx3CfMD98es0J6RuS9cWRD22JAwDtICz7Zz6c9q3J1LtbVEU+ZipIXjybiJJBVsiJntiovlUnDPW9U+oVrdzarMcIT5woDQ2wtO4jj1DcYo1oenP4a3HFpLnk2cwIwN/q0CMED34pmm6Ag1D3CrhdwaIG1HWCpUxMGS2e4FH9TEMpWQoBEDI55E9h29PWkewLS3w5C7mO4MN42iJIkAtnBiJGQQc0CsfDzDWu3iYWHLABZNyQIAENJUggxzj1rTWtIrgAs0EPtwF8p4DL7FeSe0/SG++9WDWd67ouNKywDSYMgiCSYOMn1oAd8M9PSzqbltGFxdpcDaNqNukCBjBtiPTb6wa2Wtu29SCiXoHl8Q253q05UsD5ckUP6Npt13xEURAE4iIYGBgEcURudN01tmuMttPNuK7fnJKsfKPmJIPY5zRyfEN1OnJZbfibUcYAOXXaBsXaRGMzM5xxQPp3w+mkbw7aMYK+JcuNLORJTYogeUFhkZZu+a09q8L4s3BtgqH8pJBDIfkaBuTzHJAFWLO1gxQElWjbuIMTBO04g7aad6ToBAiCPcyR6j+X5Gg3VRcVt/iKgEhdzIks2VQFswYA5+xzN4uyg7Cog8ETBPBxUGt0rsRcI8yqTwsf4TMSOf645BPKrqfDC27l1baQAxDsuGCksBIyRJJM9q5o9dY8Vkt/PcII2KfNP4jdGIxx2ioej65Lyy1sOysw3LbYW4U4h7gGBjIme01LfZ7NxrgaVVAWtqhcgKPMLezzdpjvQfCj1s3blwWrSrbBXY9640i2GYx4YwGdtqn0o7o9K1tVPitc2qoDDbnESwAiJngcUD/wBOvcsm46eGjAOoZRu2rEqVJ80y2RkcQeaK/D9wvp12bFPmhfMcbTAJn5ZPv9qWxZwu6Z3lgTPqZ8gOOBzmf4GrvThC/KAGyY9STPbj3oNbaW2MWKrtUeWELFTJTyyRByST3osHCgQx2plzBP2AAg9/4U5SynCtquphXKsNoTJgyJBWMgSYnj/KqHxd0L9LtnYy70Aa0TIyJJBMcFSc57e8uVTd8TfYbaH8jhwEuKV8rRODBCxEyB9p+i6i46A3FNoiYXiFDEAMDk8R7T9KcTZw8k04ZS6sIKFtykeby7+SeDP5j6ib2k67ctPaa3cS0CXVt4d0JXayKwB+Zg23dOQB6Vtviz4dGoPjWyBeC8AxvVSYLEjBj14z6V5buZHFp4CnylSrAowK+bb+L5AMzEtxwzvKpXr3RviXSaljatMfEPmI2kiYG47hIH0JHBrvU7YtHeSFBIGTEk8DPevPvhHXi013UlBvVLedhLBAGDTE+/1gSRivVNVpk1FpCyKQwRwGG4Dhh96JdpynbQP9OHvXav8A+jP3RSp6Hcz92h+p4q+zSAfXPp/A5FUdQKdTAu6KH69iqMwZVjMsCQB9ARV4s0sGAAnywZkepxg+2aHdT0y3bbKTI9j+z/1qFA3ROoMdWpLBtwKeSQIIJxOQcZ9q9O+HbN+1aIAL22ebTM2VXKkvuyxwDz6RXj/TH/XoQc+IgHsNwXiOa9X1PUo1JskFQltWt3N7AOG2ggrgMRJzPHpzSpzwMtqXUOCWzGVESTAxn19h/ORuo6GLyhWuEqQN9xSVa4FM+fZ6+1c/SLii0AQwZmmT3gwAMYBDd+1ENJqFUCYVyfPGJIGTBmIg4k8elJSK84tBRlbagKs5LSD25P09/ag/xNbVEW4tpmuKZQgmAccsZgQPTNWtT1m1aveHcAG6ArbSNoJG2fUEsczE+lDLust3Gu2NodxuiW3BiY3Yc4XAxxg0tHKN/CnUDcth7dsrbLbWB2rsYZOOHHmEFf4VrG0yA7nKhzwWClgWAgbj9O1Zv4fv2gpRoL7trgLgFVV32n8XMYz+WNIip5ePQAkSQCe/NPFOSlpEuI7y+4LGCFAET8hQSMesgY96k8QG4QQ0NIJkKPNHeeTHNVtEjAtvvXbru26EEKseWAGjYsD785q7qbRKrA28AzBEcmJHM+1MIhpwjKEXODMA4xgzmYzj0qrr7jlGWFJDMrlztEMfLLSBEsASD688U7Utd3RmJkM22NsD8IOIMic8V3wAUC3j4iY37yGQMhOdsRIJDZEcelAUrVprdu4CY8wOW2kMY8oaSxG7I7w1MWzc33Ec+Iocm2iwpUIFIDCBuBIgQPlBnIq2bylmRGhR5cAbVXa7Eg47ADk4HFBP9OWbZW5curdG+ALbG5uYQCIB8sDZ6DAyd0BKFHe2gCA+VgXG1iPMpBCjsFEAAcGRjmZtHcuG3auXJQuOEU7AHkqu71EgboHB+WYGV1vxbbFx7duwzBGJZGEQrYlFzLQcLGJFH7Go1FlDfu2/DsIrsLClWdgYKlxwhABwrQS+eKNFaPacKi5eY4aJKgeUGTJPuZPrTdUjODb8QoxkeUxuESCsf981Bouo27loMBC3JNsxKkZP1EQQQ3cR3ArtvWpCJ5SGDbI4G1oIEcLJgGP5U08qel1VwA2rhJZGiFg+UCVlRmRAzUXTf0przXLlxfAUnw2WJuSeDHoTG0gfM2DggV+l2yyfrGLoT5yoWdzNFtguCCsDGRugx2ufDWlaz+kIt43LRK3U3libdszuXcSSWVQBmeJnNEvGlWNM91HKry4khY/CjbWIP3nPpWG/tB+Gbrv4toE/toNsiJ86j0PtkEcZrUdP1Ae1bdmG4gbmnewBMDcByGUdvXtRZ7YbMlSplCQcLiQc+YSP40T7T4rxHQvds3FYiSuFLeRkLOysuV8yEFsGQJnEGvU/hfrNttmlUlmVWKmd0KsYb9k5wJ4A9wKHxd0beu+1bBu7SYTaA5WMSceJjHfGDjHnXRr91Lr20uXLYuP54K7SDJubkHYHdxmImnvV2rXdNPeNopV5z+hn/wAxa/4Tf+pSp96fxftfvLQ/UrRq5bqld081dZys5eGarsmM5/rRfVaQ0Mu2yO3FRYtl3SzbuowMsjjfGWjJ7nzfWvQumdR019lQXrbNbBlIXcxx8rMMhf3fb0rznqnS0tecMd0/iPrMwPrHHrWffkkCCPeI+lLWxvT25LVhbaw6IpUIrAiNonG6YMbzn94+tLT9RWdqXLVzyt4qqR8+BOScGO5zzPevERqG2eGWm2G37e26NpIHrFX+mdZvWRFu4yqDO0mUMfutjtx70u05m9e1K27jXBdt7kEAsYBQFVjaYB2GTme5odpdJZNxXt2gfMYJAJjAO1p4jHcfSvNT8R6ltwa4XJIjdBggiIEQK9H+H5aw1/SIb11TOd1rewKl8GRtBPYxgCYxSuNiplL4brT6EBUYNETgSFaQcscmYjvzXNbtbyo8OPNI8xUArnGYnH3of8H9Q1N+09zVm2QGO2BkG20NIiCAwgEE5U5o5ZvISQBx7RJJJIAPmMT/ABFGk7sQfp6gkeGwJySYUEnsGPf7CmPcfZIMFmlYILR7BoBwCcZgHvFDtf1/T2RlhMMyKgJJI3KFdhKpLeUCRkGe9ea6v4+1NxtyFbYhyFEeVSBH6xp83lbt3pk9R1ettaZA1+4tuSSJaSTJyAIOSPT61getfG7uxt6YKtoyd7AgliZYqoIAExkgnB4mKzmp1Pis0szu0KWuMdyg42FiCBiMgx9jVXStG7xCqhWPYRIMGI/DPpIyeM0+Faqz1DrF1mHiXSAOy+RZJMzbUgyZOSPQRFVLU+GzkiSyIhHDbiCeMCBu54iOYoSbc3GUkFpbJJ2uTmR7cn7ii97prJtW4StssG3oW2AEEbiSMAHH5nOKdKWiHR+hPqLpu7X8JWVXZtvl2bV2qVwzYMADAUE8CfZ9VYuG2oI2hwJ2kShYA4I9I+b+FZn4WBt2ktFB4bi4zYbexZgZ3ABRjt7CO9ayyG8MqzEBIIfElVyZ9F5+x9qnezs0FttsPbDI+y2Ctvau5WVtoUN++CsAjPPqTRhEQzbe2AILKQCA0ETCkSMx+dRanTpdUIVJVlYSG7OrD1z257me1Sog8O1vkOsA55cc/WSD+dBUM14ssrobakSr3QPKwPKttHDdxxJjmozpyFtvpFVmAVHLNG62sspETLSY/PijOpa2HDFgjgAZEghztgHnnFVeqWG32imAGgkEgMwBCAj0LR3oon0bp2t3kW26QZHlBU7Csfs8wcEfWpouWiqKf1XA3ksVyIBJyytkTJIkTUJCEqHti3ckbd0kvxPmGZnG7OYmZq/p7Hho1tm3IS22QJUHgHsQOPyoLwC/EuqBtrFxlL7rYQKCbjAhgJPy/IyE+lwnGK870nwtq7l64bVuFW/dWW+QLuEiGkMACF9cGvUL/SrVy9aDXPNbm4iA+YggLJnMBhz9azvxJ1+7pb48Nl8BFPiIpUshGeA2ZmfMN31o8c05zxAD9A6z+w3+7b/9eu1oP9f9N/5tv+H/APzSo3Faom6VC9qiDW6YbdbsAXX2rmw+GqF+wckL9yATTLmiDDIoy1mmmzU2Hth+v/Dq3LZhS0ZAHM+xJFY3X/CV5Mopb7if417M9mqz6Se1LR7eHXeg6hebczzEY/61E3TLoXI+05/OvZ9T05cDALYUEgEkCTHrgE1ketdJuXLgteDcW1y1wGBwcRGRMfnSp6eevZYcqQKP/DnxVqNN5Awe1nbactsBJnylSCpnODGTRZuhOkrgoAAojIj1M5rMa/pFxHwpZe0cgD1peRrTc2vj+9EaeyECgKNiTtDKCwBJK5cGBEkBZM0P6h1bXXAGuXLnhuAqF4iYYv5QJPMZjtiIFAvh4v4ii1u8TMrvAmMjBg4++R7UV6jcUhUDglPTadpLbQNwI9AB2Mx2pfpcm5tyxe8vhksys0eVIORgtk/iyRjiZ7UJ09q54lwNJdhk/iOQx2ke0f1zWw6D8JX777igt2iRJZYlZ82xGHoDBPqPcVoh8CaK3eAuX7pZy0W/KFyAeVXy8DnmiFa83Foux8MsXlcDzLLHa5MDygDa24T/ADr0z4a+Cra21e+rOxUAI5kIo+VTgEkSSPT+NbDQdNtWV227aoAIMASYz5m5PPerRSq0m5fSja0FtVC7AwAgbgGP3JyasjS2yNpRSv7JEj/d4pzkDJwBz6R71nOpfF9i2Qlr9ddYwFt5XcTHmucc9hJ9qaZtFoteLrKVARWBO3gqJO0CMARI9j9cGOlXbZO5H3TkQxIxIgQSI5x/WK8zs9YFq69o4Nt2UrOFO47gp9N01s+jaq24N0Hlt0EkwwXZ5B24mPf1rLfLfW4Os57qEFsgYyADBOP2e3HpRHftPmyGMgjsSI/Kgy6PfdFzxCu5Ie2VJVwsDdJPlMYgyOKtgeGQBt3uTtUAgELkjk7Tt+2BTlRYkZAz+cbWbGxoltpJ/Dg4NRXlPiIV+RRtuIW/D+FgvtB7jvSvBg+5mLFTu2NtBVYC7kIjE8g/tHgREuo0u9ZVirLtbsWABkg5mDAH+dBm9fR7lljYuBbyZtkqGhuCGVuQwkHuJkZAqXpekueGv6QE3jkWy2w8wcxBzxT7Nt925mEbQNscEdy0+n8z7RJotdbub/DcNsYo8Thl5GeftVRF/S01sZIABPJjOOM1l9L8IWkvXb1xjdNxixVo2yfUfi+9aiaiuEnA5p6TLYBf6raH/wAva/3B/lSo3+hv60qNDakUppt1b2VxgBk4HJJ4AHcngCr2QbqbioJYwPWCY78CsP0744uNqRZuWcFii7AxLZgMCzcd4jjvitx1HqNi1cFu4YYpux2TcF9ZyfQHil0/o+ntgPatoJGHGSREfOcxHvU2/Spx5O8HMkCcie8fWoLmgDFGadymRDMBMQcAwR9Zopp3R13IZEkTnlSQefcHNS+HQkCvdItu6XGtguk7GPK7hBj0kU/U6YBSSdsdyN308vf0jvRsW6rajpqXDNzc4lGCE+QNbYMp2iJO4A5ngUHGI0HTbunA8a4Ltl3J3uHW5bVvkRbcM7HccljgRRDX/CSXcEEZ5UlTg4yprZbaE9f6sti25WGu7T4dsHzM0eUR6T3pHt5v8SfDejs3FtCTqWKttUxA/eIBMtBx6ST2nW/AGktNp/EGmNpi7eZ/MWz8yE8DEECMj7Vk7HRrmo1J1Ny7DmCwUMwECFVHcAKM+8GecVuun9JuJaW1bm1aA7kqT6kkZYnnt9KWrtds7dDWo1SW8MwBnicj3jmgmiFtLj3EW5eusT53MQpM7UABgD6A0R0nRbaZMu3qfKPsBmKJrgQIUei4/wDeqZ70FudW2VS2n+LcfTn9Yv8AKq109QBlf0Z/VTvQ/Zgxj8qM3HHes5ruqM25EUptYrMRuEAgqR2z/Oi3RybDfijpl/V2xu3WnWSEZt1lu/mZCQMgQWgjOBOMNaF/SXla5a24Yq+IHkYDYRIPmbkH1M1rtXrNcpBs3ojlXXxFP3PmH2NM1PUVuDbrNItz9+3KtPqAc/8A3VNy2qTTzHVpuYscmSZ+tX+i/EjWH2P5wDIfJI9QREkH8/rWsfoGhf8Au7921M+W7aZ4n99IFRaf4EsHjVWjPJ2ux+yRS7RuxrejdfS9vAKkKszvUzk+UrM8RzzNEOldStai21u277txQtsdSSsE7Zj8OJn1I4MZjS/AOmJDFL9xgcYFlZHBk+cD6ZrSdK6FeW7vJ2Jjam57m0gRv33DlyJBMZmlqw+6UX3BVEOW2kDc3zMBOGJEn2qfTWSWLdiFA54X27Zk/ep7PT1DFjliZJ9zVrwxI5xxkxn24P3qpim5I1t04IBxTgmI59Zj+NPFr1qkIVtk8fnU6IFH9aTXAOKiZyaAm8UV2q8UqAHabqFt+Gip7iEjBH868Z0vV7lvhpHoa0Og+MisbpH8RRtdxG9T8K3ruqN65dUobfh7dsnbLHGcGWrR9M6emntrbtg7VmJMnOTkn+HFBdF8XWngFgT6d/yoqvWbf70+iqWb/dFEhW3xRGKVZ3qHxSluRCqf32lv+Gkn8yKB3/id7oIVjERPygfREMn7t9qqY1PAr8adYe3a8Ow8XWMMVI3okElgDgZAGSImRxVbRfFreAkoGuhQLjFxs3f7IyT6Y+p5oXpehXLsMUKp2e42xD9FOW/I1otB8MWbYBINw+nyIPsPM33NK4q3NAp6rrNQStsMfa2Ckf7QzH1q90/4XPN5xJOUtyx/2n4n3rTpbCrtEBf2VG1fyFPDgcUFtDptGlsAIirHfk9/aJ+kVZx9frUe+uhCaROXHOIMZE4mR3Ht9aa7k8VOlipVtCgBT2GZtp3ZBMwduIwW4nPHsaevSF70W21yDPt/H2x+eaD2GjpVv0rv+irX7IolFICgbDx0u0P/AA1qfT6ZR/4arkxEHHY/9KsinRQNmhacBSketMbUKO9BJIp231qm+t9KhN1j3oC+94DioWvE1XUVKKegctNvX1tqXdgqqJJJgAe5oX1v4hs6YedpeJW2sFz9uw9zXnfWOtXtW0OQluZVAfKI4LE8n94+uK0w6dyZ59SYt7/rlpP23/4dz/8AWlXnf6IPalWv4Gf5v0Bmmmu0q5HdWo+Df7u59a05/wDh3+ldpVWLPNgLfC/7X/NWi6B/e2v8VKlW3pl7an4j/v0+g/lRq18g+g/lSpVlVmNXBXKVSEqUtP8A3lz/AAp/O5SpUGuiu0qVBFSpUqAVdNKlQC7UxqVKgKl6qjc12lQHVqZa7Spg9aTUqVMPGevf/FX/AP6hp+m4P+Bf+alSrr6XhydXy2dKlSrVm//Z"

  }
]
}
