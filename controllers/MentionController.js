const Mention = require('../models/MentionModel');

exports.listMentions = async(req, res) =>  {
  try{
    let data = await Mention.findAll({});
    res.status(200).send(data);
  }catch(e){
    res.status(500).send({message: 'Falha ao carregar as menções.'});
  }
};

exports.createMention = async(req, res) => {
  try{
    const createMention = new Mention({
      friend: req.body.friend,
      mention: req.body.mention
    });

    await createMention.save();

    res.status(201).send({message: 'Menção cadastrada com sucesso!'});
  } catch(e) {
      res.status(500).send({
        message: 'Falha ao cadastrar a menção.'
      });
    };
}

exports.oneMention = async(req, res) => {
  try{
    let id = req.params.id;
    let data = await Mention.findOne({
      where: {id: id}
    });
    res.status(200).send(data);
  }catch(e){
    res.status(500).send({message: 'Falha ao carregar menção.'});
  };
}

exports.deleteMention = async(req, res) => {
  try{
    let id = req.params.id;
    let data = await Mention.findOne({
      where: {id: id}
    });
    res.status(200).send({message: 'Menção deletada com sucesso.'});
    return data.destroy();
  }catch(e){
    res.status(500).send({message: 'Falha ao deletar menção.'});
  }
}

/*exports.putMention = async (req, res) => {
  try{
    let id = req.params.id;
    console.log(req.params.id);
    const updatedNew = new Mention({
      friend: req.body.friend,
      mention: req.body.mention
    });

    console.log(updatedNew);

    let data = await Mention.update(updatedNew, {where: { id: id } })
    console.log(data);
    res.status(200).send({data});
  }catch(e){
    res.status(500).send({message: "Falha ao alterar dados. " + e})
  }
}*/

exports.putMention = async (req, res) => {
  try{
    let id = req.params.id;

    let data = await Mention.update(
      {friend: req.body.friend, mention: req.body.mention},
      {where: {id : id}}).then(dataNow => {
        console.log(dataNow);
        res.status(200).send({dataNow});
      })
  }catch(e){
    res.status(500).send({message: "Falha ao alterar dados. " + e})
  }
}
