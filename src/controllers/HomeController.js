import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    try {
      const newAluno = await Aluno.create({
        nome: 'João',
        sobrenome: 'Paulo',
        email: 'paulo@gmail.com',
        idade: 20,
        peso: 86.5,
        altura: 1.79,
      });
      res.json(newAluno);
    } catch (e) {
      console.log(e);
    }
  }
}

export default new HomeController();
