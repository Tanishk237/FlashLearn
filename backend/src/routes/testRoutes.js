// src/routes/testRoutes.js
const express = require('express');
const router = express.Router();
const { supabaseAdmin } = require('../config/supabaseClient');

/**
 * Insert a sample video row to verify DB is working.
 * POST /api/test/create-sample
 */
router.post('/create-sample', async (req, res) => {
  try {
    const payload = {
      youtube_url: req.body.youtube_url || 'https://youtu.be/dQw4w9WgXcQ',
      title: req.body.title || 'Sample Video',
      status: 'queued'
    };

    const { data, error } = await supabaseAdmin
      .from('videos')
      .insert([payload])
      .select()
      .single();

    if (error) throw error;
    res.json({ ok: true, data });
  } catch (err) {
    console.error('create-sample error', err);
    res.status(500).json({ ok: false, error: err.message });
  }
});

/**
 * GET /api/test/sample
 * Fetch up to 10 videos to confirm reads work.
 */
router.get('/sample', async (req, res) => {
  try {
    const { data, error } = await supabaseAdmin
      .from('videos')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10);

    if (error) throw error;
    res.json({ ok: true, data });
  } catch (err) {
    console.error('sample error', err);
    res.status(500).json({ ok: false, error: err.message });
  }
});

module.exports = router;
