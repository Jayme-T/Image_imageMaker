btn_m = pushButton('select master image')
l_path = lineEdit(reanOnly=True);
btn_m.clicked.connect(SELECT_FILE_DIALOG)
SELECT_FILE_DIALOG.closed.connet(l_path.setText(path)


btn_s = pushButton('select mini image directory')
l2_path = lineEdit(reanOnly=True);
btn_s.clicked.connect(SELECT_FILE_DIALOG)
SELECT_FILE_DIALOG.closed.connet(l2_path.setText(path)


l_img_width = lineEdit(type=int)
l_img_height = lineEdit(type=int, optional)

l_n_width = lineEdit('number of horiz images', type=int)
l_n_height = lineEdit('number of vertical images', type=int, optional)


btn_start = pushButton('start')


image_viewer()
