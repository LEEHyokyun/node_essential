//graphQL resolvers 
//API call을 통해 data 얻고, 해당 data를 기반으로 데이터 반환

const resolvers ={
    Query: {
      getLangs( ,args){
        return langs.args.name 
      }
    }
  }

  export default resolvers