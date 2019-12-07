const Mention = require('../models/MentionModel');

exports.listMentions = async(req, res) =>  {
  try{
    const data = await Mention.find({});
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
