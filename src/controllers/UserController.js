import User from '../models/User';

class UserController {
  // Create - create a new user
  async create(req, res) {
    try {
      const newUser = await User.create(req.body);
      return res.json(newUser);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map(err => err.message) });
    }
  }

  // Read - list all users
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch(e) {
      return res.json(null);
    }
  }

  // Read - show a user
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch(e) {
      return res.json(null);
    }
  }

  // Update - update a user
  async update(req, res) {
    try {
      if(!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado.'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if(!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      const newData = await user.update(req.body);
      return res.json(newData);
    } catch(e) {
      return res.status(400).json({ errors: e.errors.map(err => err.message) });
    }
  }

  // Delete - delete a user
  async delete(req, res) {
    try {
      if(!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado.'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if(!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      await user.destroy();
      return res.json(user);
    } catch(e) {
      return res.status(400).json({ errors: e.errors.map(err => err.message) });
    }
  }
}

export default new UserController();
