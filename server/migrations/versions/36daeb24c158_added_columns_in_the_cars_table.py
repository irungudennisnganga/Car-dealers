"""added columns in the cars table

Revision ID: 36daeb24c158
Revises: 2f4615ab67fd
Create Date: 2024-02-07 10:36:25.255653

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '36daeb24c158'
down_revision = '2f4615ab67fd'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('cars', schema=None) as batch_op:
        batch_op.add_column(sa.Column('engine_size', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('description', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('fuel_type', sa.String(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('cars', schema=None) as batch_op:
        batch_op.drop_column('fuel_type')
        batch_op.drop_column('description')
        batch_op.drop_column('engine_size')

    # ### end Alembic commands ###