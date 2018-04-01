import { Router } from 'express';

import generateUUID from '../../utils/uuid';

const router = Router();

// @TODO: Pagination
router.get('/', async (req, res) => {
  const { Tag } = req.db.models;
  try {
    const tags = await Tag.findAll() || [];
    res.status(200).json(tags);
  } catch (e) {
    res.status(404).send(`Error: ${e}`);
  }
});

router.get('/:id', async (req, res) => {
  const { Tag } = req.models;
  try {
    const tag = await Tag.findById(req.params.id);
    if (tag) {
      return res.status(200).json(tag);
    }
    res.status(404).send('Tag not found');
  } catch (e) {
    res.status(404).send('Tag not found');
  }
});

router.post('/', async (req, res) => {
  const { Tag } = req.models;
  try {
    const { tag } = req.body;
    if ('name' in tag) {
      const { name, description } = tag;
      const newTag = {
        id: generateUUID(),
        name,
        description,
      };
      await Tag.create(newTag);
      return res.status(200).json(newTag);
    }
    res.status(400).send('Required field missing: "name"');
  } catch (e) {
    res.status(404).send(`Error creating tag, ${e}`);
  }
});

router.put('/:id', async (req, res) => {
  const { Tag } = req.models;
  try {
    const currentTag = await Tag.findById(req.params.id);

    const { tag } = req.body;
    const { name, description } = tag;
    if ('name' in tag && name !== '') {
      const newTag = {
        name,
        description,
      };
      const newVal = await currentTag.update(newTag);
      return res.status(200).json(newVal);
    }
    res.status(400).send('Required field missing: "name"');
  } catch (e) {
    res.status(404).send(`Error updating tag, ${e}`);
  }
});

router.delete('/:id', async (req, res) => {
  const { Tag } = req.models;
  try {
    const tagToDelete = await Tag.findById(req.params.id);

    tagToDelete.destroy();
    res.status(200).json(tagToDelete);
  } catch (e) {
    res.status(400).send(`Error deleting tag ${e}`);
  }
});

export default router;
