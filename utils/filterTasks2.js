const filtered = ((args, item) => {
    function argsVerify(arg) {
        return args[arg] || "";
      }

    const filterList =
      item.realizado.includes(argsVerify("status")) &&
      item.empresa.includes(argsVerify("company")) &&
      item.responsavel.includes(argsVerify("responsible")) &&
      item.mes.includes(argsVerify("month")) &&
      item.ano.toString().includes(argsVerify("year")) &&
      item.frequencia.includes(argsVerify("frequency"));
    return filterList;
  });

  module.exports = { filtered }